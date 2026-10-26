#!/usr/bin/env node
// Generates the edge-only refraction displacement maps used by the
// liquid glass SVG filters in src/layouts/Layout.astro.
//
// Idea (after xiaop-liquid-glass / shuding liquid-glass): take the signed
// distance d to a rounded rectangle and weight the displacement with
// smoothStep(rim, 0, |d|), so only a thin rim refracts and the centre
// stays undistorted. Unlike a grayscale map, R and G carry the x and y
// components separately: each rim pixel samples the backdrop slightly
// inward along the surface normal, as a convex glass edge would.
//
// Encoding (feDisplacementMap, color-interpolation-filters="sRGB"):
//   R = 128 - 127 * k * nx,  G = 128 - 127 * k * ny,  B = 128
// where (nx, ny) is the outward unit normal and k in [0, 1] the rim weight.
// Neutral grey (128) means no displacement.
//
// Usage: node scripts/gen-glass-map.mjs   (no dependencies)

import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'static', 'glass');

// Each map is stretched to its element (preserveAspectRatio="none"), so the
// aspect ratio should roughly match the element it is used on.
const MAPS = [
  // Floating nav capsule (h-12, rounded-full; ~340-960px wide)
  { file: 'edge-nav.png', width: 800, height: 48, radius: 24, rim: 14 },
  // Publications segmented control (rounded-full, ~200x30)
  { file: 'edge-seg.png', width: 200, height: 30, radius: 15, rim: 8 },
];

const smoothStep = (e0, e1, x) => {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

// Signed distance to a rounded rectangle centred at the origin
// (half sizes hw, hh, corner radius r); negative inside.
const roundedRectSDF = (x, y, hw, hh, r) => {
  const qx = Math.abs(x) - hw + r;
  const qy = Math.abs(y) - hh + r;
  return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
};

function buildMap({ width, height, radius, rim }) {
  const hw = width / 2;
  const hh = height / 2;
  const sdf = (x, y) => roundedRectSDF(x, y, hw, hh, radius);
  const stride = width * 3 + 1;
  const raw = Buffer.alloc(stride * height);
  const eps = 0.5;
  for (let j = 0; j < height; j++) {
    raw[j * stride] = 0; // PNG filter type: None
    for (let i = 0; i < width; i++) {
      const x = i + 0.5 - hw;
      const y = j + 0.5 - hh;
      const d = sdf(x, y);
      // Outside the shape (corner pixels) the element clips anyway: full weight.
      const k = d >= 0 ? 1 : smoothStep(rim, 0, -d);
      let gx = sdf(x + eps, y) - sdf(x - eps, y);
      let gy = sdf(x, y + eps) - sdf(x, y - eps);
      const len = Math.hypot(gx, gy) || 1;
      gx /= len;
      gy /= len;
      const o = j * stride + 1 + i * 3;
      raw[o] = Math.round(128 - 127 * k * gx);
      raw[o + 1] = Math.round(128 - 127 * k * gy);
      raw[o + 2] = 128;
    }
  }
  return raw;
}

// ---- Minimal PNG encoder (8-bit RGB, deflate via node:zlib) ----
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

const crc32 = (buf) => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
};

function encodePNG(width, height, raw) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // colour type: RGB
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

mkdirSync(OUT_DIR, { recursive: true });
for (const m of MAPS) {
  const png = encodePNG(m.width, m.height, buildMap(m));
  writeFileSync(join(OUT_DIR, m.file), png);
  console.log(`static/glass/${m.file}  ${m.width}x${m.height}  rim ${m.rim}px  ${png.length} B`);
}
