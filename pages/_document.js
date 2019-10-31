import Document, { Head, Main, NextScript } from 'next/document'

export default class MeuDocumento extends Document{
  render(){
    return(
      <html>
        <Head>
          <style> {`body { background: #0754}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}


