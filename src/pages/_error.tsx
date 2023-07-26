import Link from 'next/link'
import React from 'react'
import { NextPage, NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

const CustomError: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center overflow-visible md:h-96 sm:h-screen mx-2 my-2 px-20">
      <div className="error-404">
        <h1 className="text-2xl">{"We couldn't find that Web page"}</h1>
        <h2>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h2>
        <p>
          {
            "We're sorry you ended up here. Sometimes a page gets moved or deleted, but hopefully we can help you find what you're looking for. What next?"
          }
        </p>
        <ul>
          <li>
            Return to the{' '}
            <Link href="/" className="text-cyan-600 underline">
              Home page
            </Link>
            ;
          </li>
          <li>
            <Link
              href="https://www.canada.ca/en/contact.html"
              className="text-cyan-600 underline"
            >
              Contact us{' '}
            </Link>
            {" and we'll help you out."}
          </li>
        </ul>
      </div>
      <div className="error-404">
        <h1 className="text-2xl">Nous ne pouvons trouver cette page Web</h1>
        <h2>
          {statusCode
            ? `Erreur ${statusCode}`
            : 'Erreur produite sur le client'}
        </h2>
        <p>
          {
            "Nous sommes désolés que vous ayez abouti ici. Il arrive parfois qu'une page ait été déplacée ou supprimée. Heureusement, nous pouvons vous aider à trouver ce que vous cherchez. Que faire?"
          }
        </p>
        <ul>
          <li>
            Retournez à la{' '}
            <Link href="/" className="text-cyan-600 underline">
              Page d'accueil
            </Link>
          </li>
          <li>
            <Link
              href="https://www.canada.ca/en/contact.html"
              className="text-cyan-600 underline"
            >
              Communiquez avec nous
            </Link>
            {" pour obtenir de l'aide."}
          </li>
        </ul>
      </div>
    </div>
  )
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default CustomError
