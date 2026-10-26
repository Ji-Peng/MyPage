# MyPage — Jipeng Zhang's academic homepage

Astro 5 static site + Tailwind CSS 3 + TypeScript, served at https://ji-peng.com.
`AGENTS.md` at the repo root is a symlink to this file; edit this one.

## Layout

- `src/pages/index.astro` — single page composing the components below.
- `src/layouts/Layout.astro` — HTML shell, SEO / JSON-LD, sticky nav, theme toggle (inline zero-flash script), footer.
- `src/components/` — `Header` (profile, Scholar badge), `News`, `Publications` + `PublicationCard` + `ArtifactBadge`, `Activities`.
- `src/data/*.json` — all content (publications, news, activities, profile, scholar metrics). Edit data here, not in templates.
- `src/styles/global.css` — fonts, Tailwind layers, design tokens, shared component classes, print stylesheet.
- `static/` — Astro `publicDir` (PDFs, avatar, CNAME). `public/` is a **git submodule** (Ji-Peng.github.io deploy target) — never edit it by hand.
- `scripts/fetch_scholar.py` — Google Scholar metrics sync (run by CI every 3 days).
- `scripts/gen-glass-map.mjs` — dependency-free generator for the edge-refraction displacement maps in `static/glass/` (`npm run gen:glass`).

## Commands

- `npm run dev -- --port 1316 --host` (or `./view.sh`) — dev server.
- `npm run build` — static build into `dist/`; run this to verify any change.
- `npm run check` — Astro/TS type check.
- `./deploy.sh` — fetch Scholar, build, rsync to `public/`, commit and push both repos.

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the live site.

## Design conventions

- Visual language: iOS-style "liquid glass" — translucent, blurred, specular-edged surfaces over a soft colourful backdrop. Shared primitives live in `global.css` (`@layer components`); reuse them instead of re-inventing per component.
- Keep high information density: this is an academic page for reviewers and peers, so glass is decoration, never at the cost of legibility or compactness.
- Every style must work in light and dark (`darkMode: 'class'`, toggled on `<html>`).
- Respect `prefers-reduced-motion` and `prefers-reduced-transparency`; provide solid fallbacks where `backdrop-filter` is unsupported.
- The `@media print` stylesheet must keep producing a clean, plain CV (no blur, no backgrounds).
- Glass add-ons: `.glass-glow` (cursor highlight; hero, sections, publication cards), `.glass-award-rim` (slow gold conic rim; award rows only), `.glass-refract` (Chromium-only edge refraction; nav capsule and Publications segmented control only). `.glass`/`.glass-strong` use `::before` (rim) and `::after` (glow + sheen + reflect layers); do not add more pseudo-elements to them.
- Refraction maps are precomputed: change sizes in `scripts/gen-glass-map.mjs`, run `npm run gen:glass`, and keep the SVG filters in `Layout.astro` in sync. The `url()` backdrop filter must stay in its own gated rule so other engines keep the plain blur.
- No new runtime JS frameworks or heavy dependencies; the page ships near-zero JS.
