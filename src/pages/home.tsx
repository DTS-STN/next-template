import React from 'react'
import { GetStaticProps } from 'next'
import { fetchContent } from '../lib/cms'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface HomeProps {
  locale: string
  content: {
    header: string
    paragraph: string
  }
}

export default function Home(props: HomeProps) {
  return (
    <div
      id="homeContent"
      className="container mx-auto px-6 mt-5 bg-slate-300 p-8"
    >
      <h1>{props.content.header}</h1>
      <p>{props.content.paragraph}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const content = await fetchContent()

  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/home' : '/home'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Next Template - Home',
      desc: 'English',
      author: 'Service Canada',
      keywords: '',
    },
    data_fr: {
      title: 'Next Template - Accueil',
      desc: 'Français',
      author: 'Service Canada',
      keywords: '',
    },
  }

  return {
    // props: { locale, langToggleLink, content, meta },
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      locale,
      langToggleLink,
      content,
      meta,
    },
  }
}
