<!-- markdownlint-disable -->
<details>
<summary><strong>tip</strong> - Fold / Unfold.</summary>

1. `??` でくくられている範囲を編集すること。 `??` を残さない。
    1. `??? ` で始まる行は行ごと削除する。
</details>

## Issue
1. ??? #123

## 概要
1. ?? issueに対して何をどうしたかを書く ??

## 補足説明
1. ??? あれば
1. なし
    1. ??? なければこの行を削除。あれば↑の行ごと削除

## 完了条件
1. ??? 具体的で定量的に判断できる書き方で
    1. 例: 仕様xxxに反映され、yyyに承認コメントをもらった

## Checklist
### issue担当者用
#### merge request作成時
1. [ ] これより上に `??` や `???` がないことを確認した
1. [ ] タイトルを1文で説明できた内容になっている
1. [ ] 該当するラベルにチェックを入れた
1. [ ] merge先が `master` になっていることを確認した
1. [ ] 実施予定時間を `/estimate` で書いた

#### merge request作成後、`WIP` 剥がす時
1. [ ] commitする前にlintチェックを行った
1. [ ] ガイドラインや規約に沿って実装した
1. ラベル `docs` を付けた
1. [ ] 作業にかかった時間を `/spend` で書いた
1. [ ] `WIP:` を外した
1. [ ] これより上に `??` や `???` がないことを確認した
1. [ ] 上記がすべてチェックされている
1. [ ] mergeを依頼した

### 承認者(mergeできる人)
#### merge前
1. [ ] このmerge requestがissueと紐付いている
1. [ ] レビュアーのコメントすべてに返信で対応結果が書かれている
1. [ ] レビューのコメントがレビュー者によって `Resolve thread` にしてある
1. [ ] 以下のチェックが入っている
    1. ソースブランチを削除
    1. コミットを1つにまとめる (ある場合のみ)

#### merge後
1. T.B.D.

<!-- markdownlint-enable -->
/assign me
/assign ?? @abc ??

/label ~docs

/milestone ?? %xxx ??

/estimate ?? 4h ??

/spend ?? 4h ??
