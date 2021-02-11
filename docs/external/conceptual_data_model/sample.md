---
sidbar: false
---
# 概念データモデル.サンブル - ER Sample
- [index](/)に戻る

## Description

<!-- markdownlint-disable -->
@startuml
'hide circle
!define _Master << (M, Gold) >>
!define _Transaction << (T, DarkSeaGreen) >>
skinparam linetype ortho

legend top left
    凡例
    |= 説明 |= 記号 |
    | 0 or 1 | <#honeydew> --o\| |
    | 1のみ | <#honeydew> --\|\| |
    | 0以上 | <#honeydew> --o{ |
    | 1以上 | <#honeydew> --\|{ |
    ----
    M = Master
    T = Transaction
    ----
    ● = 必須
end legend

entity "ユーザー" as users _Master {
    * 名前
    * Eメール
    :
}

entity "注文履歴" as orders _Transaction {
    * 注文番号
      注文日時
    :
}

entity "カート" as carts _Transaction {
    :
}

entity "商品" as items _Master {
    * JANコード
    * 商品名
    :
}

entity "コメント" as comments _Transaction {
    タイトル
    本文
    :
}

entity "ポイント" as points _Transaction {
    ポイント数
    付与日
    :
}

users ||--o{ orders
orders ||--o{ carts
carts ||--o{ items
items ||--o{ comments
users ||--|{ points
@enduml
<!-- markdownlint-enable -->

## -- Tag List --
<TagList />
