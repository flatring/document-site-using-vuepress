# backend
- [index](/)に戻る

## ガイドラインの目的
1. 書き方や命名ルールを取り決めて、開発者によって実装の違いを少なくする
1. バグの要因を減らし、デバッグしやすくする
1. 新メンバーの導入を用意にする

## 前提
1. gRPC利用
    1. とりあえずC#
1. DB接続
    1. Dapper利用
        1. Queryの利用を選定にしているため

## フォルダー構成

@startuml
@startwbs
+_ Root
 + Backend
  + Properties
   +_ launchSettings.json
  + Models
   + Entities
    +_ SampleMonth.cs
    +_ SampleDay.cs
   +_ GetAllSampleDays.cs
   +_ GetSampleDay.cs
   +_ GetAllSundays.cs
  + Protos
   +_ SampleMonth.proto
   +_ SampleDay.proto
   +_ GetAllSundays.proto
  + Services
   +_ SampleDayServiceImpl.proto
   +_ GetAllSundaysServiceImpl.proto
 + ClientStub
  + Protos
   +_ ※ BackendのProtosをリンク
  + Tests
@endwbs
@enduml

### `/Backend/Models/`
1. DB接続とQeuryを実行するクラス。このクラス以外でのDB接続禁止。
1. Protosで定義されたrpcの1つに対して、1ファイル(1クラス)とする。
1. クラス内のメソッドは以下で固定。
    1. `Accept`
        1. DB接続とQuery実行。
        1. このメソッド内でのみDB接続を行う。
    1. `Present`
        1. Acceptの戻り値を呼び出し元に返す。
        1. 整形やコード変換などを行う。
1. 例:
    ```diff
    + GetAllSundays.cs
    - GetAllSunday.cs
    - GetSampleDays.cs
    + GetSampleDay.cs
    ```

### `/Backend/Models/Entities/`
1. Dapper用。テーブルのフィールドをI/Oするためのクラス。
1. フィールド定義だけなので名前は単数形とする。
    1. これをArrayで使う変数は複数形になる。
1. 例: `SampleDay.cs`
    ```csharp
    public class SampleDay
    {
        public int Id { get; set; }
        public stirng Name { get; set; }
        public stirng Comment { get; set; }
        public Datetime CreatedAt { get; set; }
    }
    ```

### `/Backend/Protos/`
1. gRPC接続用のIDL定義ファイル。
1. 基本ルール
    1. 1テーブルのシンプルなを定義する場合、1ファイル内に全て記述する。
        1. rpc定義の接頭はDapperのメソッドに合わせる。
            1. Get
            1. GetAll
            1. Insert
            1. Update
            1. Delete
        1. 例: `SampleDay.proto`
            ```protobuf
            service SampleDayService {
                rpc GetAllSampleDays (FiltersRequest) returns (SampleDays);
                rpc GetSampleDay (KeysRequest) returns (SampleDay);
                rpc InsertSampleDay (SampleDay) returns (Empty);
                rpc UpdateSampleDay (SampleDay) returns (Empty);
                rpc DeleteSampleDay (KeysRequest) returns (Empty);
            }
            ```
    1. 複数のテーブルをjoinしたQeuryやトランザクション処理が必要な場合、その処理(rpc)1つで1ファイルにする。
        1. 例: `GetAllSundays.proto`
            ```protobuf
            service GetAllSundaysService {
                rpc GetAllSundays (FiltersRequest) returns (SundayListResponse);
            }
            ```
1. サービスの定義は名前がModels等と被るとわかりにくくなるので、接尾に `Service` と付ける。
    1. 例: `SampleDay.proto`
        ```protobuf
        service SampleDayService {
            rpc GetSampleDay (FilterRequest) returns (Response);
            :
        }
        ```

### `/Backend/Services/`
1. 一般的なControllerに相当。ここから始まってここで終える。
1. protoファイルで自動作成されたクラスを継承して使うので、 接尾に `Impl` を付ける。
    1. 例: `SampleDayServiceImpl.cs`

### `/ClientStub/Protos/`
1. Backendと同じprotoファイルが必要。2重管理になるので、リンクファイルとして追加する
1. `ClientStub.csproj`
    ```xml
      :
    <ItemGroup>
      <Protobuf Include="..\Backend\Protos\*.proto" GrpcServices="Client">
        <Link>Protos\SampleDay.proto</Link>
      </Protobuf>
    </ItemGroup>
    ```

## シーケンス図

@startuml
autonumber "**[00]**"
skinparam BoxPadding 8
skinparam ParticipantPadding 4

entity Client
participant Services
participant Models
database RDB

Client -> Services ++ : Request
alt Security authentication
  Services -> Services : HTTPS認証確認
  alt Error
    Services -> Client : Response status 401
  end
end
alt Validator
  Services -> Services : Request validation check.
  alt Error
    Services -> Client : Response status 400
  end
end
Services -> Models ++ : <例> GetSampleDay
alt Models method Accept
  Models <-> RDB : db connection\n and query execution.
  alt Error
    Models -> Services : Response status xxx ①\n And Exit Models.
  end
end
alt Models method Present
  Models <-> Models : Formatter, etc.
  alt Error
    Models -> Services : Response status xxx ②\n And Exit Models.
  end
end
Models -> Services -- : Response Sucess.
alt Error
  Services -> Client : Response status ① or ②
else Success
  Services -> Client -- : Response 200.\n And Present.Response.
end

@enduml

## -- Tag List --
<TagList />
