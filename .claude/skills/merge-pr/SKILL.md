---
name: merge-pr
description: このスキルはユーザーが「PRをマージする」「マージして」「merge a PR」と依頼したときに使用する。fixup コミットを autosquash して指定した PR をマージする。
disable-model-invocation: true
argument-hint: "<PR番号>"
---

PR $ARGUMENTS を autosquash してマージする。

## 手順

### 1. レビュースレッドがすべて resolve されているか確認

```bash
gh api graphql -f query='
{
  repository(owner: "Adacchi3", name: "adacchi3.github.io") {
    pullRequest(number: $ARGUMENTS) {
      reviewThreads(first: 10) {
        nodes {
          id
          isResolved
        }
      }
    }
  }
}'
```

未 resolve のスレッドがあれば resolve してからマージに進む。

### 2. autosquash

```bash
GIT_SEQUENCE_EDITOR=: git rebase -i --autosquash origin/master
```

### 3. force push

```bash
git push --force-with-lease
```

### 4. マージ

```bash
gh pr merge $ARGUMENTS --merge --repo Adacchi3/adacchi3.github.io
```
