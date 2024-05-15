# ベースイメージの指定をNode.jsのバージョン18に更新
FROM node:18

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースをバンドル
COPY . .

# アプリケーションを起動
CMD ["npm", "run", "dev"]
