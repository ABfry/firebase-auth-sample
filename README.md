# firebase 認証のサンプル

## 使用例

ログイン画面

![スクリーンショット 2024-06-23 15 46 20](https://github.com/ABfry/firebase-auth-sample/assets/88941921/9b8d390f-6e44-48d1-853a-bb15d54ce559)

---

ログインに成功すると E-mail や ID などのセッション情報が表示される
このまま iframe などの埋め込みに使用可

![スクリーンショット 2024-06-23 15 44 54](https://github.com/ABfry/firebase-auth-sample/assets/88941921/6e0e8255-946d-4b49-82b4-4c6d57c757a1)


id などの情報は firebase で管理される

## つかいかた

```bash
make i #必要パッケージをインストールする

make d #dev環境起動
```

Open [http://localhost:3000](http://localhost:3000)

## Firebase の設定

プロジェクト作成後の FirebaseSDK の環境キーをメモっておく

Authentication 選択後、プロバイダにメール/パスワードを追加

詳細は
[https://qiita.com/masakiwakabayashi/items/741998ed5b830d8f3707]
の "Firebase の設定"を参照

### プロジェクト設定

先程メモっておいた環境キーを

.env.example のように.env ファイル作成し、貼り付け

```
NEXTAUTH_SECRET
```

は

```
openssl rand -base64 32
```

コマンドを叩いてランダムな値を取得して貼り付ける

### Admin SDK の追加

プロジェクトの設定 → サービスアカウント →Firebase Admin SDK
から新しい秘密鍵を作成し、名称を

```
firebaseSecretKey.json
```

に変更し、ルートディレクトリ直下にぶち込む
