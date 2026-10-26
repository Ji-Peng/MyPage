# Dr. Jipeng Zhang (张吉鹏) - Academic Homepage

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Live-ji--peng.com-4F46E5?style=flat)](https://ji-peng.com)

Source code of the academic homepage of [Dr. Jipeng Zhang](https://ji-peng.com). The site was rebuilt from a legacy Hugo / Wowchemy setup on **Astro 7 + Tailwind CSS + TypeScript**. It targets readers in cryptography and systems security, and aims to be lightweight, information-dense, and largely self-maintaining.

---

## 🌟 Features

- **⚡️ Lightweight and fast**: fully static output (SSG) with almost no client-side JavaScript. A build takes about 1.5 seconds.
- **🫧 Liquid glass design**: iOS-style translucent surfaces over a soft colourful backdrop, with specular edges, a pointer-following glow, and edge refraction in Chromium browsers. Reduced-motion, reduced-transparency, and print fallbacks are included.
- **📄 High information density**: designed for peers and PC reviewers, without padded card layouts. Visitors can switch between all papers and selected ones (All 18 / Selected 5), expand and copy BibTeX, and open either the self-hosted PDF or the publisher page. Awards such as the USENIX Security Distinguished Paper Award are highlighted.
- **🏷️ Artifact badges**: badges follow the official labels of the top-4 security venues and IACR (e.g. `IACR CHES Artifacts Functional`, `IACR CHES Results Reproduced`, `Artifacts Available`, `Artifact Evaluated`), each linking to its evaluation page.
- **🔗 Co-author links**: a central co-author table turns author names in the publication list into links to their homepages or DBLP / Google Scholar profiles.
- **🎨 Typography**: self-hosted Inter (body text) and JetBrains Mono (code and labels).
- **🌓 Flicker-free dark mode**: an inline script applies the stored theme before the first paint, and the choice persists in local storage.
- **🤖 Google Scholar sync**: a weekly local cron job fetches citations, h-index, and i10-index, and pushes the data only when the numbers change.
- **📱 Responsive and print-ready**: the layout adapts to all breakpoints, and a print stylesheet (`@media print`) turns the page into a clean CV via `Ctrl + P`.
- **🔍 SEO and structured data**: Open Graph and Twitter Card tags, plus Schema.org `Person` JSON-LD for search engines and academic knowledge graphs.

---

## 📂 Project Structure

```text
MyPage/
├── .github/workflows/
│   ├── deploy.yml            # Build and deploy to Ji-Peng.github.io on every push to main
│   └── scholar-cron.yml      # Manual-only Scholar sync (Scholar blocks GitHub runner IPs)
├── public/                   # Deployed site (git submodule pointing to Ji-Peng.github.io)
├── scripts/
│   ├── fetch_scholar.py      # Fetch Google Scholar metrics into src/data/scholar.json
│   ├── sync-scholar.sh       # Weekly cron wrapper: fetch, commit, and push on change
│   └── gen-glass-map.mjs     # Generate the liquid-glass edge displacement maps
├── src/
│   ├── components/
│   │   ├── Activities.astro      # PC service, invited talks, open-source and industry projects
│   │   ├── ArtifactBadge.astro   # Artifact evaluation badge with status style and link
│   │   ├── Header.astro          # Profile, affiliation, Scholar metrics, links, interests
│   │   ├── News.astro            # News list with pinned items
│   │   ├── Publications.astro    # Publication list with Selected / All tabs
│   │   └── PublicationCard.astro # One paper: authors, links, badges, BibTeX panel
│   ├── data/
│   │   ├── activities.json   # Service, talks, code, and collaborations
│   │   ├── coauthors.ts      # Co-author name → homepage / DBLP map
│   │   ├── news.json         # News items
│   │   ├── profile.json      # Profile, education, interests, and social links
│   │   ├── publications.json # Publication metadata (title, authors, links, badges, BibTeX)
│   │   ├── scholar.json      # Google Scholar metrics (citations, h-index, i10-index)
│   │   └── types.ts          # Shared TypeScript types
│   ├── layouts/
│   │   └── Layout.astro      # HTML shell, navigation, theme toggle, SEO, and JSON-LD
│   ├── pages/
│   │   └── index.astro       # Home page
│   └── styles/
│       └── global.css        # Fonts, Tailwind layers, liquid-glass system, print styles
├── static/                   # Static assets (paper PDFs, slides, certificates, photos, CNAME)
├── astro.config.mjs          # Astro configuration
├── postcss.config.mjs        # PostCSS pipeline (Tailwind + Autoprefixer)
├── tailwind.config.mjs       # Tailwind palette, page width, and typography plugin
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
├── deploy.sh                 # Fetch Scholar data, build, and push both repositories
└── view.sh                   # Start the local dev server
```

---

## 🚀 Getting Started

### Requirements

- **Node.js**: `>= 22.23.4`
- **npm**: `>= 9.0.0`
- **Python**: `>= 3.10` (for the Scholar sync and `deploy.sh`)

### Install and run

1. **Clone the repository with its submodule**:
   ```bash
   git clone --recursive git@github.com:Ji-Peng/MyPage.git
   cd MyPage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the dev server**:
   ```bash
   ./view.sh
   # or:
   # npm run dev -- --port 1316 --host
   ```
   Open `http://localhost:1316` for a live preview with hot reload.

---

## 📝 Updating Content

All content lives in `src/data/`, separate from the templates, so updates do not require touching HTML or Astro code.

### 1. Add or update a publication (`src/data/publications.json`)

Add or edit an entry in `src/data/publications.json`:

```json
{
  "id": "venue2026-papername",
  "title": "Your Paper Title",
  "authors": ["Jipeng Zhang", "Tao Lu", "Jiaheng Zhang"],
  "venue": "Full Conference Name (ACRONYM 2026)",
  "venueShort": "ACRONYM 2026",
  "year": 2026,
  "award": null,
  "selected": true,
  "links": {
    "pdf": "/uploads/venue2026/paper.pdf",
    "venue": "https://official-venue-url.org",
    "artifact": "https://artifacts-url.org",
    "code": "https://github.com/Ji-Peng/repo"
  },
  "artifactBadges": [
    {
      "type": "functional",
      "label": "IACR CHES Artifacts Functional",
      "url": "https://artifacts-url.org"
    }
  ],
  "bibtex": "@inproceedings{zhang2026paper,\n  author = {Zhang, Jipeng and Lu, Tao and Zhang, Jiaheng},\n  title = {Your Paper Title},\n  booktitle = {ACRONYM},\n  year = {2026}\n}"
}
```

- With `"selected": true`, the paper also appears under the Selected tab.
- Put local PDFs in `static/uploads/` and reference them in `links.pdf` as `/uploads/...`.

### 2. Update co-author links (`src/data/coauthors.ts`)

When a new co-author appears or a homepage changes, add the name and URL to the map in `src/data/coauthors.ts`. Matching author names in the publication list become links automatically:

```typescript
export const coauthorLinks: Record<string, string> = {
  'Tao Lu': 'https://tao-lu-123.github.io/',
  'Yanpei Guo': 'https://paulguoyanpei.github.io/',
  'Ray C. C. Cheung': 'https://cityuhk-calas.github.io/author/prof.-ray-c.c.-cheung/',
  // ... more co-authors
};
```

### 3. Post news (`src/data/news.json`)

Add an item to the array in `src/data/news.json`. With `"pinned": true`, the item stays at the top of the list with a pinned badge:

```json
{
  "id": "news-2026-sample",
  "date": "2026-09",
  "title": "Paper accepted to Top Venue!",
  "content": "Our paper has been accepted to ...",
  "type": "paper",
  "pinned": false
}
```

### 4. Sync Google Scholar metrics

- **Automatic**: Google Scholar blocks GitHub Actions IPs, so a local cron job runs `scripts/sync-scholar.sh` every Monday at 10:00 (log: `~/.local/state/mypage-scholar-sync.log`). It commits and pushes `scholar.json` only when the metrics change; the push then triggers CI, which builds and publishes to `Ji-Peng.github.io`.
- **Manual**: run
  ```bash
  npm run fetch:scholar
  ```
  This fetches the latest citations, h-index, and i10-index and overwrites `src/data/scholar.json`.

---

## 🚢 Build and Deploy

### Option 1: GitHub Actions (default)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to `Ji-Peng.github.io`.

### Option 2: Local one-step deploy

`deploy.sh` fetches the latest Scholar data, builds the site, syncs the output into `public/`, commits and pushes the `public` repository (commit message `update`), and then commits and pushes this repository:

```bash
git -C public pull   # CI also pushes to public/, so update it first
./deploy.sh
```

---

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT).
