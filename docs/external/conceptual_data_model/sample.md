---
sidbar: false
---
# 概念データモデル.サンブル - ER Sample
- [index](/)に戻る

## Description

@startuml
hide circle
skinparam linetype ortho

legend top left
  凡例
  |= 説明 |= 記号 |
  | 0 or 1 | <#honeydew> --o\| |
  | 1のみ | <#honeydew> --\|\| |
  | 0以上 | <#honeydew> --o{ |
  | 1以上 | <#honeydew> --\|{ |
end legend

entity "ユーザー" as users {
  名前
  Eメール
  :
}

entity "注文履歴" as orders {
  注文日
  :
}

entity "カート" as carts {
  :
}

entity "商品" as items {
  商品名
  JANコード
  :
}

entity "コメント" as comments {
  タイトル
  本文
  :
}

entity "ポイント" as points {
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

## 【Tag List】
<TagList />
