import Link from 'next/link'
import React from 'react'
import { NextPage, NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

export function CustomError({ statusCode }: ErrorProps) {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center md:h-96 sm:h-screen my-2 gap-5">
      <div className="px-20">
        <h1 className="text-2xl">We couldn't find that Web page</h1>
        <h2>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h2>
        <p>
          We're sorry you ended up here. Sometimes a page gets moved or deleted,
          but hopefully we can help you find what you're looking for. What next?
        </p>
        <p>
          <span>Return to the </span>
          <Link href="/" className="text-cyan-600 underline">
            home page
          </Link>
        </p>
        <p>
          <Link
            href="https://www.canada.ca/en/contact.html"
            className="text-cyan-600 underline"
          >
            Contact us
          </Link>
          <span> and we'll help you out</span>
        </p>
      </div>
      <div className="px-20">
        <h1 className="text-2xl">Nous ne pouvons trouver cette page Web</h1>
        <h2>
          {statusCode
            ? `Erreur ${statusCode}`
            : 'Erreur produite sur le client'}
        </h2>
        <p>
          Nous sommes désolés que vous ayez abouti ici. Il arrive parfois qu'une
          page ait été déplacée ou supprimée. Heureusement, nous pouvons vous
          aider à trouver ce que vous cherchez. Que faire?
        </p>
        <p>
          <span>Retournez à la </span>
          <Link href="/" className="text-cyan-600 underline">
            page d'accueil
          </Link>
        </p>
        <p>
          <Link
            href="https://www.canada.ca/en/contact.html"
            className="text-cyan-600 underline"
          >
            Communiquez avec nous
          </Link>
          <span> pour obtenir de l'aide.</span>
        </p>
      </div>
    </div>
  )
}

CustomError.getLayout = function PageLayout(page: NextPage) {
  return <>{page}</>
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default CustomError
