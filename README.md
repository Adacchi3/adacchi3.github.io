# adacchi3.github.io

Adacchi3 の個人ポートフォリオサイト。Next.js + Contentful で構築し、GitHub Pages でホスティング。

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 / React 18 / TypeScript 5 |
| Styling | Tailwind CSS v4 |
| CMS | Contentful (Apollo Client / GraphQL) |
| Linter | Biome |
| Package Manager | Yarn v4 |
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

### Build

```bash
yarn build   # ビルド & 静的ファイルを ./out に出力
```
