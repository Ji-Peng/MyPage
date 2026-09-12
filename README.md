# Dr. Jipeng Zhang (张吉鹏) - Academic Homepage

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Live-ji--peng.com-4F46E5?style=flat)](https://ji-peng.com)

本仓库是 [张吉鹏（Jipeng Zhang）博士](https://ji-peng.com) 的个人学术主页源码仓库。该网站已由历史遗留的 Hugo / Wowchemy 架构彻底重构为现代化的 **Astro v5 + Tailwind CSS + TypeScript** 全新工程体系，专为密码学与计算机系统安全领域打造，具有极致轻量、信息高密度（High Information Density）、优雅排版与全自动化运维特性。

---

## 🌟 核心设计与特性

- **⚡️ 极致轻量与瞬时加载**：采用 Astro 纯静态生成（SSG）技术，全站首屏零冗余 JavaScript 水合负担，单页构建仅需约 1.7 秒，页面毫秒级秒开。
- **📄 学术信息高密度（High Information Density）**：专为学术同行与顶会评审（PC Reviewer）设计，杜绝臃肿的卡片留白。支持全部论文与代表作一键切换（All 17 vs. Selected 5）、一键展开并复制 BibTeX、论文获奖高亮（USENIX Security Distinguished Paper Award）及自建 PDF / 官方出版界面双通道直达。
- **🏷️ 官方评测徽章系统（Artifact Badges）**：严格匹配安全四大与 IACR 官方标准，提供规范化的评测徽章（如 `IACR CHES Artifacts Functional`、`IACR CHES Results Reproduced`、`Artifacts Available`、`Artifact Evaluated`），并附带直达评测页面外链。
- **🔗 自动化合作者网络关联**：内置集中式合作者数据引擎，在论文列表中自动将主要合作导师及学者（如 Hao Cheng、Tao Lu、Jiaheng Zhang、Yanpei Guo、Wenjie Qu、Çetin Kaya Koç、Ray C. C. Cheung 等）链接至其个人主页或权威学术档案（DBLP / Google Scholar）。
- **🎨 顶尖学术字体排版**：全面采用本地自托管原版 Inter（正文）与 JetBrains Mono（代码/标识）字体，字符渲染平滑自然，针对学术数字、公式标签及技术术语进行了精细化字偶间距调校。
- **🌓 零闪烁暗黑模式（Dark / Light Theme）**：采用全局内联原生防抖脚本与单例事件系统，毫秒级切换且完全持久化存储于本地，杜绝页面加载闪烁与双重触发冲突。
- **🤖 Google Scholar 自动化周期同步**：通过 GitHub Actions 周期性运行 Python 爬虫，自动定时拉取最新的 Google Scholar 引用量（Citations）、h-index 与 i10-index，并在数据发生变更时自动提交更新主页。
- **📱 移动端自适应与打印就绪（Print-ready CV）**：全断点响应式适配，同时内置专业学术打印样式表（`@media print`），支持在浏览器使用 `Ctrl + P` 直接导出纯净无杂质的学术简历 PDF。
- **🔍 深度学术搜索引擎优化（SEO & JSON-LD）**：不仅完整支持 Open Graph 与 Twitter Card 元标签，还在页面注入了 Schema.org `Person` 结构化数据，大幅提升 Google Scholar、Google Search 与学术知识图谱的抓取索引精度。

---

## 📂 项目工程结构

```text
MyPage/
├── .github/workflows/
│   ├── deploy.yml            # GitHub Pages 自动化静态构建与部署流水线
│   └── scholar-cron.yml      # 每周日定时同步 Google Scholar 引用数的 CI 工作流
├── public/                   # 线上生产部署目录（Git Submodule 指向 Ji-Peng.github.io）
├── scripts/
│   └── fetch_scholar.py     # Google Scholar 学术指标自动化采集脚本
├── src/
│   ├── components/
│   │   ├── Activities.astro  # 学术服务（PC 委员）、受邀报告、开源贡献与企业合作项目
│   │   ├── ArtifactBadge.astro # 官方 Artifact 评测徽章渲染组件（带状态样式与外链）
│   │   ├── Header.astro      # 个人简介、NUS 博士后信息、总引用数徽章、学术外链与研究方向
│   │   ├── News.astro        # 顶会录用、获奖动态与置顶重大新闻列表
│   │   └── Publications.astro# 论文展示、作者高亮与链接、BibTeX 代码抽屉与年份分组
│   ├── data/
│   │   ├── activities.json   # PC 服务、学术报告、开源代码与产学研合作数据源
│   │   ├── coauthors.ts      # 合作者姓名与个人学术主页 / DBLP 映射表
│   │   ├── news.json         # 近期动态与置顶新闻数据源
│   │   ├── profile.json      # 个人基本资料、教育背景、研究兴趣与社交外链数据源
│   │   ├── publications.json # 全部 17 篇代表作结构化元数据（标题、作者、论文链接、徽章、BibTeX）
│   │   ├── scholar.json      # Google Scholar 实时抓取数据（Citations, h-index, i10-index）
│   │   └── types.ts          # 全站 TypeScript 强类型定义
│   ├── layouts/
│   │   └── Layout.astro      # HTML 骨架、全局导航栏、主题切换器、SEO 与 JSON-LD
│   ├── pages/
│   │   └── index.astro       # 主页入口聚合页面
│   └── styles/
│       └── global.css        # 自托管字体导入、Tailwind 规则、滚动条定制与打印样式
├── static/                   # 静态媒体资产目录（论文 PDF、幻灯片、获奖证书、照片、CNAME 等）
├── astro.config.mjs          # Astro 工程核心配置文件
├── tailwind.config.mjs       # Tailwind CSS 调色板与排版插件配置
├── tsconfig.json             # TypeScript 编译器配置
├── package.json              # 项目依赖及运行脚本配置
├── deploy.sh                 # 本地一键构建并将静态产物同步到 public/ 的脚本
└── view.sh                   # 本地一键启动开发预览服务器脚本
```

---

## 🚀 快速上手与本地开发

### 环境要求

- **Node.js**: `>= 20.0.0`
- **npm**: `>= 9.0.0`
- **Python**: `>= 3.10`（仅在手动执行学术引用数据同步脚本时需要）

### 安装依赖与启动服务

1. **克隆仓库（包含子模块）**：
   ```bash
   git clone --recursive git@github.com:Ji-Peng/MyPage.git
   cd MyPage
   ```

2. **安装 Node.js 项目依赖**：
   ```bash
   npm install
   ```

3. **启动本地开发预览服务器**：
   ```bash
   ./view.sh
   # 或者直接运行：
   # npm run dev -- --port 1316 --host
   ```
   打开浏览器访问 `http://localhost:1316` 即可实时预览页面并享受毫秒级热重载（HMR）。

---

## 📝 内容日常维护指南

所有展示内容均采用数据与表现分离的原则存放于 `src/data/` 目录，无需修改复杂的 HTML 或 Astro 模板即可轻松更新：

### 1. 添加或更新学术论文 (`src/data/publications.json`)

在 `src/data/publications.json` 中添加或修改对应的 JSON 节点：

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

- 若设置 `"selected": true`，论文将同时出现在精选代表作（Selected）分类标签中。
- 若有本地 PDF 文件，将其直接放入 `static/uploads/` 并在 `links.pdf` 中以 `/uploads/...` 引用。

### 2. 更新合作者主页外链 (`src/data/coauthors.ts`)

当论文作者中出现新的合作学者或合作者更新个人主页时，直接在 `src/data/coauthors.ts` 的字典中配置对应的名字与主页链接，论文列表中的作者姓名将自动渲染为可点击超链接：

```typescript
export const coauthorLinks: Record<string, string> = {
  'Tao Lu': 'https://tao-lu-123.github.io/',
  'Yanpei Guo': 'https://paulguoyanpei.github.io/',
  'Ray C. C. Cheung': 'https://cityuhk-calas.github.io/author/prof.-ray-c.c.-cheung/',
  // ... 更多合作者主页映射
};
```

### 3. 发布最新动态与置顶要闻 (`src/data/news.json`)

在 `src/data/news.json` 数组中添加新闻。若设置 `"pinned": true`，该条要闻将永远置顶显示（带有黄金奖牌徽章）：

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

### 4. 同步 Google Scholar 引用数据

- **自动同步**：项目已配置 GitHub Actions 定时任务（每周日午夜自动运行并提交最新引用指标）。
- **手动立即同步**：在本地终端运行：
  ```bash
  npm run fetch:scholar
  ```
  该命令会自动联网抓取最新的引用次数、h 指数和 i10 指数并覆盖更新 `src/data/scholar.json`。

---

## 🚢 网站编译与部署流程

### 方式一：本地一键全自动编译与双仓库推送（极力推荐）

项目根目录提供了全自动一键发布脚本 `deploy.sh`。执行该脚本将自动完成 Astro 静态编译、同步产物到 `public/`、自动提交并推送 `public` 线上仓库（commit 信息固定为 "update"），随后自动提交并推送当前源码主仓库：

```bash
./deploy.sh
```

### 方式二：GitHub Actions 云端全自动部署

代码推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动触发云端静态构建与部署流水线，全自动发布到 GitHub Pages。

---

## 📄 开源许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源许可协议发布。