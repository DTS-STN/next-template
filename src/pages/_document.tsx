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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
