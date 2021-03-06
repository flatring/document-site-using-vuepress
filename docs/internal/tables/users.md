# users - ユーザー
- [index](/)に戻る
- [テーブル一覧](../list_tables.md)に戻る

## 説明・用途 - Description
1. <GreenBadge text="T.B.D." />

## 表領域 - Table space
1. `master`

## 定義 - Definition
### markdownのtableの場合

|     #     | Physical name | Logical name | Type    | Digit | Not Null | Default value | Description                 |
| :-------: | ------------- | ------------ | ------- | ----: | :------: | ------------- | --------------------------- |
| {{ n=1 }} | id            | id           | int     |     - |   True   |               | Primary key. auto increment |
| {{ ++n }} | password      | パスワード   | string  |    30 |   True   | `qwerty12345` | crypt                       |
| {{ ++n }} | name          | 名前         | string  |   100 |   True   |               |                             |
| {{ ++n }} | email         | Eメール      | string  |   100 |   True   |               |                             |
| {{ ++n }} | gender        | 性別         | tinyint |     - |   True   |               | [性別](#性別-gender)        |

### vue-good-tableの場合
<TableGrid />

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
1. [sample](../er/sample.md)

## -- Tag List --
<TagList />
