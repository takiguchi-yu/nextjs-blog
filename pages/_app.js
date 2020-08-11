// グローバルCSSロード用ファンクション
// アンスコ(_)のファイルを追加したときはサーバ再起動をしてください。

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
