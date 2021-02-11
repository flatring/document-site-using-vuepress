# tasks - タスク
- [index](/)に戻る
- [テーブル一覧](../list_tables.md)に戻る

## 説明・用途 - Description
1. <GreenBadge text="T.B.D." />

## 表領域 - Table space
1. `master`

## 定義 - Definition

|     #     | Physical name | Logical name | Type     | Digit | Not Null | Default value | Description                 |
| :-------: | ------------- | ------------ | -------- | ----: | :------: | ------------- | --------------------------- |
| {{ n=1 }} | id            | id           | int      |     - |   True   |               | Primary key. auto increment |
| {{ ++n }} | title         | タイトル     | string   |   250 |   True   |               |                             |
| {{ ++n }} | description   | 本文         | string   |  1000 |    -     |               |                             |
| {{ ++n }} | due_date      | 期限日       | datetime |     - |    -     |               |                             |
| {{ ++n }} | is_notified   | 通知あり     | boolean  |     - |    -     |               | True=通知あり               |

## インデックス - Index
1. [table name]_idx_01
    1. title
1. [table name]_idx_02
    1. description

## ユニークキー - Unique key
1. None

## 関連ER図 - Related ER diagram
1. [sample](../er/sample.md)

## -- Tag List --
<TagList />
