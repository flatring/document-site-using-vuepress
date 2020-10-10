# user_histories - ユーザー履歴
- [index](/)に戻る
- [テーブル一覧](../list_tables.md)に戻る

## 説明・用途 - Description
1. <GreenBadge text="T.B.D." />

## 表領域 - Table space
1. `master`

## 定義 - Definition

| Physical name | Logical name       | Type     | Digit | Not Null | Default value     | Description                     |
| ------------- | ------------------ | -------- | ----: | :------: | ----------------- | ------------------------------- |
| id            | id                 | int      |     - |   True   |                   | Primary key. auto increment     |
| password      | パスワード         | string   |    30 |   True   | `qwerty12345`     | crypt                           |
| name          | 名前               | string   |   100 |   True   |                   |                                 |
| email         | Eメール            | string   |   100 |   True   |                   |                                 |
| gender        | 性別               | tinyint  |     - |   True   |                   | [性別](#性別-gender)            |
| target_id     | 非履歴テーブルのID | int      |     - |   True   |                   |                                 |
| is_deleted    | 削除済み           | boolean  |     - |   True   | `false`           | 非履歴を削除したときのみ `true` |
| updated_at    | 更新日時           | datetime |     - |   True   | current_timestamp | insert時のみセットされる        |
| updater_id    | 更新者ID           | int      |     - |   True   |                   | user_id                         |

### 性別 - gender
- `0`: 男性
- `1`: 女性

## インデックス - Index
1. [table name]_idx_01
    1. name
1. [table name]_idx_02
    1. email

## ユニークキー - Unique key
1. [table name]_uq_01
    1. email

## 関連ER図 - Related ER diagram
1. <GreenBadge text="T.B.D." />

## 【Tag List】
<TagList />
