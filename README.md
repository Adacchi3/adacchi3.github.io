# adacchi3.github.io

Adacchi3 の個人ポートフォリオサイト。Next.js + Contentful で構築し、GitHub Pages でホスティング。

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js / React / TypeScript |
| Styling | Tailwind CSS |
| CMS | Contentful (Apollo Client / GraphQL) |
| Linter | Biome |
| Package Manager | Yarn |
| Hosting | GitHub Pages |

## Getting Started

### Environment Variables

`.env.example` をコピーして `.env` を作成し、各値を設定する。

```bash
cp .env.example .env
```

### Install & Run

```bash
yarn install
yarn dev
```

### Build & Export

```bash
yarn build
yarn export   # 静的ファイルを ./out に出力
```
