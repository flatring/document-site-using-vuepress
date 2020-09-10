# Git
- [index](/)に戻る

## インストーラー - Installer
1. 公式サイト: [git](https://git-scm.com)
    1. [Downloads](https://git-scm.com/downloads)

::: warning Windowsの場合
1. インストール時の設定で改行コードが自動変換されないようにする
    1. `Configuring the lien ending conversions` で
        1. `Checkout as-is, commit as-is` を選択する
            1. `core.autocrlf = false` と同意
    1. 環境によって改行コードを変えないようにする
        1. 基本、Linuxベース(LF)でgit管理されていることが前提
:::

## インストール後の設定 - Post-installation settings
1. 以降、Git Bash画面での説明

### 自分の名前登録する
1. プロジェクトに合わせたルールで
1. 例: ローマ字で「名字 + ` `(半角スペース) + 名前」とする
    ```bash
    # 設定
    git config --global user.name "suzuki taro"
    # 確認
    git config -l global | grep user.name
    ```

### EMailの設定
1. 例: `abc@aaa.com`
    ```bash
    # 設定
    git config --global user.email abc@aaa.com
    # 確認
    git config -l global | grep user.email
    ```

### 大文字と小文字の変更を検知する
```bash
# 設定
git config --global core.ignorecase false
# 確認
git config -l global | grep core.ignorecase
```

## よく使いそうなコマンド
### ファイルのリネーム
1. ファイル名の変更をgit認識しない時
    ```bash
    # Logo.PNG を logo.png にしたい場合
    git mv Logo.PNG logo.png
    ```

### gitの対象から外す
1. コミット後に.gitignoreを編集してファイルが残ってしまう場合
    ```bash
    # sample.md をコミットしてしまった場合
    git rm sample.md
    # sample.md をaddしてしまった場合
    git rm --cached sample.md
    ```

## 【Tag List】
<TagList />
