---
name: create-pr
description: このスキルはユーザーが「PRを作成する」「プルリクエストを作る」「create a PR」と依頼したときに使用する。What/How/Why/Ref フォーマットで Pull Request を作成する。
disable-model-invocation: true
---

現在のブランチの変更内容をもとに Pull Request を作成する。

## 手順

1. `git log origin/master..HEAD` で変更コミットを確認する
2. 変更内容を把握した上で PR のタイトルと概要を考える
3. 以下のフォーマットで PR を作成する

## PR 作成コマンド

```bash
gh pr create \
  --title "<タイトル>" \
  --body "$(cat <<'EOF'
## What
何をしたか

## How
どのように実装したか

## Why
なぜそうしたか

## Ref
- 参考リンク
EOF
)" \
  --base master \
  --repo Adacchi3/adacchi3.github.io
```

## タイトルの指針

- prefix 不要（`feat:` などは使わない）
- 英語・簡潔に内容を表す
- 例: `Add Biome GitHub Actions workflow`
