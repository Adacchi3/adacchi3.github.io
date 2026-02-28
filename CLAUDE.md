# adacchi3.github.io

Adacchi3 の個人ポートフォリオサイト。Next.js + Contentful で構築し、GitHub Pages でホスティング。

- **リポジトリ:** `Adacchi3/adacchi3.github.io`

## 技術スタック

- **フレームワーク:** Next.js 15 / React 18 / TypeScript 5
- **スタイリング:** Tailwind CSS v4
- **CMS:** Contentful (Apollo Client / GraphQL)
- **リンター:** Biome
- **パッケージマネージャー:** Yarn v4

## 開発コマンド

```bash
yarn dev        # 開発サーバ起動
yarn build      # ビルド & 静的ファイルを ./out に出力
yarn lint       # Biome でリント（biome check src）
yarn generate   # GraphQL 型生成
```

## Git・PR 規約

### ブランチ命名

- `master` から切る
- kebab-case で内容を簡潔に表す（例: `add-biome-github-action`）

### コミットメッセージ

- prefix（`[ci]`, `feat:` など）は**不要**
- 内容を簡潔に英語で記述する
- レビュー指摘の修正は `git commit --fixup=<hash>` を使う

例:
```
Add Biome GitHub Actions workflow
```

### PR の説明フォーマット

```markdown
## What
何をしたか

## How
どのように実装したか

## Why
なぜそうしたか

## Ref
- 参考リンク
```

### PR ワークフロー

1. `master` からブランチを切る
2. 実装・コミット（fixup があれば `fixup!` コミットを追加）
3. autosquash して force push
   ```bash
   GIT_SEQUENCE_EDITOR=: git rebase -i --autosquash origin/master
   git push -u origin <branch>  # 初回
   git push --force-with-lease  # rebase 後
   ```
4. `/create-pr` で PR 作成
5. `/review-pr <PR番号>` でレビューし、行ごとにコメント
6. 指摘があれば `/fix-review <PR番号>` で修正・push・resolve を一括実施
7. `/merge-pr <PR番号>` でマージ（autosquash・force push・merge を含む）
