# Visual Studio Code
- [index](/)に戻る

## インストール手順 - Installer
1. [Download visual Studio Code](https://code.visualstudio.com/download)
1. Visual Studio Codeを以降 `VSCode` と表記

## 参考
1. Qiita
    1. [1分でも早く仕事を終わらせるためにVSCodeにできること](https://qiita.com/EaE/items/4ca1b35396eba682a86f?utm_source=Qiitaニュース&utm_campaign=5d415ebf58-Qiita_newsletter_431_10_07_2020&utm_medium=email&utm_term=0_e44feaa081-5d415ebf58-38585986)

## おすすめの拡張機能 - Recommended extensions
1. `Ctrl + Shift + x` で選択可

### 日本語化 - Japanese Language Pack for Visual Studio Code
1. <https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja>

### Draw.io Integration
1. <https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio>
1. これとPlantUMLがあれば大概の絵が書けます
1. 例えばGoogleCloudの構成図が書きたければ↓からアイコンが使えます
    1. [公式のアイコンと図のサンプル](https://cloud.google.com/icons?hl=ja)

### Markdown All in One
1. <https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one>
1. tableのフォーマットが便利(`Alt + Shift + f`)
1. 箇条書きの際にインクリメントされると却って面倒なので `1. ` で固定にする
    1. `settings.json`
        ``` json
        // Markdown All in One
        "markdown.extension.list.indentationSize": "inherit",
        "markdown.extension.orderedList.marker": "one",
        ```

### markdownlint
1. <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
1. markdownのlint
1. rootに置いたlintファイル `.markdownlint.yml` のルールに従って問題点を指摘しててくれる
1. lintさせない行がある場合には↓のように記述する
    ```markdown
    <!-- markdownlint-disable MD037 -->
    deliberate space * in * emphasis
    <!-- markdownlint-enable MD037 -->
    ```

## -- Tag List --
<TagList />
