# comments - コメント
- [index](/)に戻る
- [テーブル一覧](../list_tables.md)に戻る

## 説明・用途 - Description
1. <GreenBadge text="T.B.D." />

## 表領域 - Table space
1. `master`

## 定義 - Definition

| Physical name | Logical name | Type   | Digit | Not Null | Default value | Description                 |
| ------------- | ------------ | ------ | ----: | :------: | ------------- | --------------------------- |
| id            | id           | int    |     - |   True   |               | Primary key. auto increment |
| description   | 本文         | string |  1000 |    -     |               |                             |

## インデックス - Index
1. [table name]_idx_01
    1. title
1. [table name]_idx_02
    1. description

## ユニークキー - Unique key
1. [table name]_uq_01
    1. description

## 関連ER図 - Related ER diagram
1. [sample](../er/sample.md)

## -- Tag List --
<TagList />
