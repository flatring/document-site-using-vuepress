---
tags: ["list"]
---
# テーブル一覧 - List of tables
- [index](/)に戻る

## tables
1. [users](tables/users.md) - ユーザー
    1. user_histories - ユーザー履歴
1. [tasks](tables/tasks.md) - タスク
    1. [comments](tables/comments.md) - コメント
1. roles - 権限

## マイグレーション共通 - common to migration
1. migrationすることでテーブル定義の末尾に以下が追加される
1. 命名例
    1. 非履歴: `users`
    1. 履歴: `user_histories`

### 非履歴 - not history
| Physical name | Logical name | Type     | Digit | Not Null | Default value     | Description              |
| ------------- | ------------ | -------- | ----: | :------: | ----------------- | ------------------------ |
| created_at    | 登録日時     | datetime |     - |   True   | current_timestamp | insert時のみセットされる |
| updater_id    | 更新者ID     | int      |     - |   True   |                   | user_id                  |

### 履歴 - history
| Physical name | Logical name       | Type     | Digit | Not Null | Default value     | Description                     |
| ------------- | ------------------ | -------- | ----: | :------: | ----------------- | ------------------------------- |
| target_id     | 非履歴テーブルのID | int      |     - |   True   |                   |                                 |
| is_deleted    | 削除済み           | boolean  |     - |   True   | `false`           | 非履歴を削除したときのみ `true` |
| updated_at    | 更新日時           | datetime |     - |   True   | current_timestamp | insert時のみセットされる        |
| updater_id    | 更新者ID           | int      |     - |   True   |                   | user_id                         |


## -- Tag List --
<TagList />
