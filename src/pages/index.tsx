import Link from 'next/link'
import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

export default function Index() {
  return (
    <>
      <NextSeo title="Next Template - Canada.ca" />
      <main
        role="main"
        className="container mx-auto px-6 my-5 bg-slate-300 p-12"
      >
        <div className="flex flex-col justify-center items-center m-auto">
          <div className="z-10 bg-white h-auto w-[18.75rem] xl:w-[31.25rem]">
            <h1 className="sr-only">service.canada.ca-digital-center</h1>
            <div className="p-2">
              <img
                src="/assets/sig-blk-en.svg"
                alt="Government of Canada / Gouvernement du Canada logo"
                className="w-3/4"
              />
            </div>
            <div className="flex w-max container py-11 mx-auto font-display">
              <div className="grid grid-cols-2 gap-2 xl:gap-6">
                <Link
                  href="/home"
                  className="font-display rounded focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-10 whitespace-pre bg-[#173451] text-white text-center border border-[#173451] active:bg-[#21303F] hover:bg-#245C81 grid place-items-center"
                  role="button"
                  draggable="false"
                  lang="en"
                  id="english-button"
                >
                  English
                </Link>
                <Link
                  href="/fr/home"
                  className="font-display rounded focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-10 whitespace-pre bg-[#173451] text-white text-center border border-[#173451] active:bg-[#21303F] hover:bg-#245C81 grid place-items-center"
                  role="button"
                  draggable="false"
                  lang="fr"
                  id="french-button"
                >
                  Français
                </Link>
              </div>
            </div>
          </div>

          <div className="relative py-8 bg-gray-light text-p h-auto min-w-[18.75rem] w-[18.75rem] flex justify-between p-6 xl:w-[31.25rem] xl:items-center">
            <div className="w-28 text-base xl:text-p xl:w-max font-body text-bright-blue-dark">
              <Link
                href="https://www.canada.ca/en/transparency/terms.html"
                className="inline-block w-28 xl:w-max mr-0 hover:underline splash-a text-lg"
                lang="en"
                data-cy="terms"
              >
                Terms &amp; conditions
              </Link>
              <span> • </span>
              <Link
                href="https://www.canada.ca/fr/transparence/avis.html"
                className="inline-block hover:underline font-body text-lg"
                lang="fr"
                data-cy="avis"
              >
                Avis
              </Link>
            </div>
            <img
              className="h-auto w-24 xl:w-28"
              src="/assets/wmms-blk.svg"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  )
}

Index.getLayout = function PageLayout(page: NextPage) {
  return <>{page}</>
}
