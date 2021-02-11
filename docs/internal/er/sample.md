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
  | 0 or 1 | <#honeydew> --o\| |
  | 1のみ | <#honeydew> --\|\| |
  | 0以上 | <#honeydew> --o{ |
  | 1以上 | <#honeydew> --\|{ |
end legend

entity "users ユーザー" as users {
  id
}

entity "tasks タスク" as tasks {
  id
}

entity "tasks_comments" as tasks_comments {
  id
  --
  task_id
  comment_id
}

entity "comments コメント" as comments {
  id
}

tasks ||--|{ tasks_comments
tasks ||--|| users
tasks_comments }|--|| comments
comments ||--|| users
@enduml

## -- Tag List --
<TagList />
