// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ji-peng.com',
  publicDir: './static',
  outDir: './dist',
  // Astro 7 defaults to 'jsx', which drops line-break whitespace before inline tags.
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  build: {
    assets: 'assets',
  },
  // Tailwind 3 runs through PostCSS (postcss.config.mjs); @astrojs/tailwind does not support Astro 6+.
});
