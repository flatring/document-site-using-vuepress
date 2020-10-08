# branch
- [index](/)に戻る

## 命名ルール
1. regex
    1. `^(master|(feature\/|bugfix\/|revert-|cherry-pick-)(#[0-9]*\-)?[a-z0-9\-]*)$`
1. <https://regexper.com/#%5E%28master%7C%28feature%5C%2F%7Cbugfix%5C%2F%7Crevert-%7Ccherry-pick-%29%28%23%5B0-9%5D*%5C-%29%3F%5Ba-z0-9%5C-%5D*%29%24>

### 基本ルール
1. 使える文字は以下
    1. アルファベット小文字
    1. 数値
    1. `/`(スラッシュ)
    1. `-`(ハイフン)
1. つまりスネークケース
    1. 例
        1. `feature/#1234-update-docs-markdown-20200304`
        1. `cherry-pick-#1234-update-docs-markdown-20200304`
1. 内訳
    1. :one: :two: `-` :three:
1. :one: - 分類
    1. `feature/`
        1. 一般的なissue
    1. `bugfix/`
        1. 障害対応用
    1. `revert-`
        1. mergeされたmerge requestを取り消したい場合
    1. `cherry-pick-`
        1. 違うbranchにmergeしたい場合
1. :two: - issue番号
    1. issue番号
    1. 基本的にはissue drivenなので必須にしたいが、緊急時など例外も見越して省略できるようにしてある
1. :three: - 内容 + 作成日
    1. 任意だけど、それとわかる文章があると望ましい
    1. 同日複数のmerge requestを建てる場合もあるので、作成日を入れるようにする

## -- Tag List --
<TagList />
