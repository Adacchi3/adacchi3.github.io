---
name: fix-review
description: このスキルはユーザーが「レビューを修正する」「指摘を直して」「fix review」と依頼したときに使用する。PR のオープンなレビュースレッドを取得し、指摘を修正・コミット・push・resolve まで一括で行う。
disable-model-invocation: true
argument-hint: "<PR番号>"
---

PR $ARGUMENTS のオープンなレビュースレッドを取得し、指摘内容を修正して resolve まで行う。

## 手順

### 1. オープンなレビュースレッドを取得

```bash
gh api graphql -f query='
{
  repository(owner: "Adacchi3", name: "adacchi3.github.io") {
    pullRequest(number: $ARGUMENTS) {
      reviewThreads(first: 20) {
        nodes {
          id
          isResolved
          comments(first: 1) {
            nodes {
              body
              path
              line
            }
          }
        }
      }
    }
  }
}'
```

未 resolve のスレッドを抽出し、各スレッドの `path`・`line`・`body` を確認する。

### 2. すべての指摘を修正

未 resolve のスレッド全件の指摘を、コミットせずにまとめて修正する。

### 3. fixup コミットをまとめて1つ作成

```bash
# 元コミットのハッシュを確認（fixup! でないコミットの中で最新のもの）
git log origin/master..HEAD --oneline

git add <修正ファイル>
git commit --fixup=<元コミットのハッシュ>
```

### 4. push（autosquash は不要）

```bash
git push
```

### 5. すべてのスレッドを resolve

```bash
gh api graphql -f query='
mutation {
  resolveReviewThread(input: {threadId: "<threadId>"}) {
    thread { isResolved }
  }
}'
```

### 6. /review-pr で再レビュー

`/review-pr $ARGUMENTS` を実行し、新たな指摘がないかを確認する。

- 指摘がある場合は手順 2 に戻る
- 指摘がない場合は `/merge-pr $ARGUMENTS` でマージに進む
