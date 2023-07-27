import { Html, Head, Main, NextScript } from 'next/document'

interface DocumentProps {
  locale?: string
}

export default function Document({ locale }: DocumentProps) {
  const lang = locale ?? 'en'
  return (
    <Html lang={lang}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
