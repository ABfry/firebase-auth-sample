# firebase 認証のサンプル

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

に変更し、ルートディレクトリ直下にぶち込む。

これで動かなければ教えて下さい！
