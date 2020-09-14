# markdown
- [index](/)に戻る

## 基本
### 章立て
1. 例
    ```markdown
    # 章タイトル
    ## 少タイトルごとに"#"を増やす。最大で5個
    1. だけど深すぎる改装は抽象化が甘い可能性があるので、そこから検討する。
    ```
1. 章のひとつ上の行は空行にする
    1. ただし、更に上の行が章の場合は不要
    1. 例
        ```markdown
        # 本タイトル
        ## サブタイトル1。本タイトルとサブタイトルの間に空行は不要
        1. 箇条書き1

        ## サブタイトル2。上の行が章ではないので空行を入れる
        1. 箇条書き2
        ```

### 箇条書き
1. 仕様という鑑定では番号があったほうが伝えやすいので、数値になるように `1. ` を使う
1. 番号はデプロイ時に振られるので2番目以降でも `1. ` とする
1. 例
    ```markdown
    1. 1つ目
    1. 2つ目でも "1."
        1. インデントは半角スペース4つ。タブ文字禁止
        1. 2つ目でも "1."
    ```
1. 例のデプロイ結果
    1. 1つ目
    1. 2つ目でも "1."
        1. インデントは半角スペース4つ。タブ文字禁止
        1. 2つ目でも "1."
1. VSCode利用時にインクリメントされる場合は以下の設定にする
    ```json
    "markdown.extensionis.orderdList.marker": "one";
    ```

### リンク
1. 他のページの場合は相対パスで書ける
    1. 例
        ```markdown
        [ER図](uml/er_diragram.md)
        ```
1. <GreenBadge text="VuePress" /> 絶対パスの場合は `docs/` をルートとして書く
    1. 例
        ```markdown
        [ER図](./developments/uml/er_diagram.md) - `./` から書く
        ```

### 画像
1. 標準
    ```markdown
    ![image](images/logo.png)
    ```
    1. 標準だと画像サイズを指定できない
1. <GreenBadge text="VuePress" /> サイズを指定する場合
    1. 例
        ```markdown
        ![image](images/logo.png =200x100)
        ```
        1. widthのみ指定する場合
            ```markdown
            ![image](images/logo.png =200x)
            ```
        1. heightのみ指定する場合
            ```markdown
            ![image](images/logo.png =x100)
            ```
    ::: tip
    1. プラグイン `markdown-it-imsize` を使うとサイズ指定が可能
    :::

## 応用
### コードプロック
1. \`\`\`(バックォート3つ)で囲うとコードプロックになる
1. 使えるコードプロックは以下を参照
    1. prismjs.com - [Supported languages](https://prismjs.com/#supported-languages)
1. <GreenBadge text="VuePress" /> `{`、`}`で囲うとその行がハイライト表示される
    1. 例
        ````markdown
        ```nim{5-7,9}
        import tables, strutils

        var wordFrequencies = initCountTable[string]()

        for line in stdin.lines:
        for word in line.split(", "):
            wordFrequencies.inc(word)

        echo "The most frequent word is '", wordFrequencies.largest, "'"
        ```
        ````
    1. 例のデプロイ結果
        ```nim{5-7,9}
        import tables, strutils

        var wordFrequencies = initCountTable[string]()

        for line in stdin.lines:
        for word in line.split(", "):
            wordFrequencies.inc(word)

        echo "The most frequent word is '", wordFrequencies.largest, "'"
        ```
1. <GreenBadge text="VuePress" /> クリップボードコピー
    1. ![image](../images/vuepress-markdown-clipboard-copy.png =600x)
    ::: tip
    1. プラグイン `vuepress-plugin-clipboard-copy` を利用しているため
    :::

### その他
1. emoji。絵文字
    1. 参考: WebFX - [EMOJI CHEAT SHEET](https://www.webfx.com/tools/emoji-cheat-sheet/)

## <GreenBadge text="VuePress" /> VuePress components
### オリジナル
1. 用途
    1. 仕様での色見本
1. 使用例
    1. 16進法
        1. 例
            ```markdown
            1. 背景色: クリーム色: <ColorSample color="#FFFFCC" />
            ```
        1. 例のデプロイ結果
            1. 背景色: クリーム色: <ColorSample color="#FFFFCC" />
    <!-- 1. カラーネーム -->
        <!-- 1. 参考: HTMLクイックリファレンス.WEBカラーリファレンス.[カラーネーム140色](http://www.htmq.com/color/colorname.shtml) -->
        <!-- 1. 例 -->
            <!-- ```markdown -->
            <!-- 1. 背景色: ライトイエロー: <ColorSample color="#whitesmoke" /> -->
            <!-- ``` -->
        <!-- 1. 例のデプロイ結果 -->
            <!-- 1. 背景色: ライトイエロー: <ColorSample color="#whitesmoke" /> -->

### TagList
1. 関連仕様を関連付ける
1. 参考元
    1. [Adding Tags to VuePress](https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html)
1. オリジナルとの変更点
    1. `h2`  → `h3`

#### 利用方法
1. 文頭
    1. 関連するタグ文字を書く
    1. 例
        ```markdown
        ---
        tags: ["git"]
        ---
        ```
1. 文末
    1. 自動生成されるタグリンクを追加
    1. 例
        ```markdown

        ## -- Tag List --
        <TagList />
        ```

## -- Tag List --
<TagList />
