## Remix tutorial
### Outlet
親ルート内において、子ルートのコンポーネントを表示するためのコンポーネント。
`<Outlet />`を使うことで、子ルートのコンポーネントを表示することができる。

### meta
HTML内のメタデータを変更するために使われる関数。
`<meta />`タグを使うことで、HTML内のメタデータを変更することができる。

### loader
レンダリング時にデータを取得するためにサーバー側で実行される関数。

### Dynamic Segments
動的に変わるURLのパス部分をマッチさせて、その値を取得するための機能。


### action
データの変更などを行うためにサーバ側で実行される関数。
`<button />`などのイベントをトリガーにして、データの変更を行うことができる。


## shadow/ui
ex. add button
```bash
bunx shadcn-ui@latest add button
```


## prisma
### prisma schamaの作成
`prisma/models`配下に作成
```bash
bun run db:import
```
prismaディレクトリ配下に`schema.prisma`が作成される。


### prisma generate
```bash
bun run db:generate
```

### primsa migrate
```bash
docker compose up -d

bun run db:migrate
```
