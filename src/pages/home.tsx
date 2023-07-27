import React from 'react'
import { GetStaticProps } from 'next'
import { fetchContent } from '../lib/cms'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'

interface HomeProps {
  locale: string
  content: {
    header: string
    paragraph: string
  }
}

export default function Home(props: HomeProps) {
  const { t } = useTranslation(['home', 'common'])
  return (
    <>
      <NextSeo title={t('title')} />
      <div
        id="homeContent"
        className="container mx-auto px-6 mt-5 bg-slate-300 p-8"
      >
        <h1>{props.content.header}</h1>
        <p>{props.content.paragraph}</p>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const content = await fetchContent()

  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/home' : '/home'

  return {
    // props: { locale, langToggleLink, content, meta },
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
      locale,
      langToggleLink,
      content,
    },
  }
}
