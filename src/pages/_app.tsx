import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import React, { ComponentType, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}

type Props = AppProps & {
  Component: Page
}

const App = ({ Component, pageProps }: Props) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <Layout
      locale={pageProps.locale}
      meta={pageProps.meta}
      langToggleLink={pageProps.langToggleLink}
    >
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
