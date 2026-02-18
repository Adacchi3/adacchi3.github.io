---
name: review-pr
description: このスキルはユーザーが「PRをレビューする」「レビューして」「review a PR」と依頼したときに使用する。指定した PR をレビューし、GitHub API で行ごとにコメントを投稿する。
disable-model-invocation: true
argument-hint: "<PR番号>"
---

PR $ARGUMENTS をレビューし、指摘があれば行ごとにコメントする。指摘がなければその旨を伝える。

## 手順

1. `gh pr diff $ARGUMENTS` で差分を取得してコードをレビューする
2. 以下の観点でコードを精査する
3. 指摘がある場合は以下の方法で行ごとにレビューコメントを投稿する
4. 指摘がない場合はその旨を伝えて `/merge-pr` スキルに進む

## レビュー観点

### セキュリティ
- XSS・SQL インジェクション・CSRF などの脆弱性がないか
- 機密情報（API キー・トークン等）がハードコードされていないか
- 外部入力のバリデーション・サニタイズが適切か
- 依存ライブラリの既知の脆弱性がないか

### Breaking Changes
- 既存の API・インターフェース・props の型シグネチャに非互換な変更がないか
- データベーススキーマや永続化形式に後方互換性のない変更がないか
- 削除・リネームによって他箇所が壊れないか

### ベストプラクティス
- このプロジェクトの技術スタック（Next.js / React / TypeScript / Tailwind CSS）の慣例に沿っているか
- 不要なコードの重複や、シンプルに書けるロジックがないか
- TypeScript の型が適切に使われているか（`any` の濫用がないか）
- コンポーネントの責務が適切に分離されているか

### パフォーマンス
- 不必要な再レンダリングや重い処理がループ内にないか
- 画像・アセットの最適化が考慮されているか

### 一般的なコード品質
- 変数名・関数名が意図を適切に表しているか
- エラーハンドリングが適切か
- コメントがない場合、コードから意図が読み取れるか

## レビューコメントの投稿

```bash
gh api repos/Adacchi3/adacchi3.github.io/pulls/$ARGUMENTS/reviews \
  --method POST \
  --field body="レビュー全体のコメント" \
  --field event="COMMENT" \
  --field "comments[][path]=対象ファイルパス" \
  --field "comments[][line]=行番号" \
  --field "comments[][side]=RIGHT" \
  --field "comments[][body]=コメント内容"
```

## レビュースレッドの resolve

指摘が修正されたら、GraphQL API でスレッドを resolve する。

```bash
# スレッド ID を取得
gh api graphql -f query='
{
  repository(owner: "Adacchi3", name: "adacchi3.github.io") {
    pullRequest(number: $ARGUMENTS) {
      reviewThreads(first: 10) {
        nodes {
          id
          isResolved
          comments(first: 1) {
            nodes { body }
          }
        }
      }
    }
  }
}'

# スレッドを resolve
gh api graphql -f query='
mutation {
  resolveReviewThread(input: {threadId: "<threadId>"}) {
    thread { isResolved }
  }
}'
```
