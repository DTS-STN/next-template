import React from 'react'
import Head from 'next/head'

interface MetaDataProps {
  language: string
  data: {
    data_en: {
      title: string
      desc: string
      author: string
      keywords: string
    }
    data_fr: {
      title: string
      desc: string
      author: string
      keywords: string
    }
  }
}

const MetaData: React.FC<MetaDataProps> = (props) => {
  const d = props.language === 'en' ? props.data.data_en : props.data.data_fr

  return (
    <>
      <Head>
        <title>{d.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={d.desc} />
        <meta name="author" content={d.author} />
        <meta name="keywords" content={d.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
    </>
  )
}

export default MetaData
