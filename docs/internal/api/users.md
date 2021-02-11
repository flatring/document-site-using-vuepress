# users - ユーザー
- [index](/)に戻る
- [API一覧](../list_api.md)に戻る

## 説明・用途 - Description
1. ユーザー情報

## List users
1. すべてのユーザー一覧をページ単位で返します

<ApiUrl method="get" url="/users/" />

### パラメーター - parameters

| Name       | Type    | In     | Default                       | Description                          |
| ---------- | ------- | ------ | ----------------------------- | ------------------------------------ |
| `accept`   | string  | header | `application/json; version=1` | -                                    |
| `per_page` | integer | query  | `50`                          | Results per page (max 100)           |
| `page`     | integer | query  | `1`                           | Page number of the results to fetch. |

### コードサンプル - code samples
1. REST Client
    ```
    @url=https://example.com

    GET {{url}}/users?per_page=100&page=2
    content-type: application/json
    ```

### レスポンス - response
#### Default
```
Status: 200 OK
```

```json
[
  {
    "id": 1,
    "name": "szuki ichiro",
    "email": "suzuki_ichiro@abc.com"
  },
  {
    :
  },
]
```

#### Not modified
```
Status: 304 Not Modified
```

## Get a user
1. 単一のユーザーを返します

<ApiUrl method="get" url="/users/{id}" />

### パラメーター - parameters

| Name      | Type    | In     | Default                       | Description |
| --------- | ------- | ------ | ----------------------------- | ----------- |
| `accept`  | string  | header | `application/json; version=1` | -           |
| `user_id` | integer | path   | -                             | -           |

### コードサンプル - code samples
1. REST Client
    ```
    @url=https://example.com

    GET {{url}}/users/{{id}}
    content-type: application/json
    ```

### レスポンス - response
#### Default
```
Status: 200 OK
```

```json
{
  "id": 1,
  "username": "szuki ichiro",
  "email": "suzuki_ichiro@abc.com"
}
```

#### Resource not found
```
Status: 404 Not Found
```

#### Validation failed
```
Status: 422 Unprocessable Entity
```

## Create a user
1. 単一のユーザーを返します

<ApiUrl method="post" url="/users/" />

### パラメーター - parameters

| Name       | Type   | In     | Default                       | Description              |
| ---------- | ------ | ------ | ----------------------------- | ------------------------ |
| `accept`   | string | header | `application/json; version=1` | -                        |
| `username` | string | body   | -                             | **Required.** full name. |
| `email`    | string | body   | -                             | **Required.** Email.     |

### コードサンプル - code samples
1. REST Client
    ```
    @url=https://example.com

    POST {{url}}/users
    content-type: application/json

    {
        "username": "suzuki ichiro",
        "email": "suzuki_ichiro@abc.com"
    }
    ```

### レスポンス - response
#### Default
```
Status: 201 Created
```

```json
{
  "id": 1,
  "name": "szuki ichiro",
  "email": "suzuki_ichiro@abc.com"
}
```

#### Not modified
```
Status: 304 Not Modified
```

#### Requires authentication
```
Status: 401 Unauthorized
```

#### Forbidden
```
Status: 403 Forbidden
```

#### Resource not found
```
Status: 404 Not Found
```

#### Validation failed
```
Status: 422 Unprocessable Entity
```

## -- Tag List --
<TagList />
