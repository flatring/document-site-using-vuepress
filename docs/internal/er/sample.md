---
sidbar: false
---
# サンブル - ER Sample
- [index](/)に戻る

## Description
1. 表示はリレーションキーのみ

@startuml
hide circle
skinparam linetype ortho

legend top left
  凡例
  |= 説明 |= 記号 |
  | 0 or 1 | <#honeydew> \|o-- |
  | 1のみ | <#honeydew> \|\|-- |
  | 0以上 | <#honeydew> }o-- |
  | 1以上 | <#honeydew> }\|-- |
end legend

entity "users ユーザー" as users {
  id
}

entity "user_histories ユーザー履歴" as user_histories {
  id
  --
  user_id
}

users ||--|{ user_histories
@enduml

## 【Tag List】
<TagList />
