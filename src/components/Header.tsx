import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

interface HeaderProps {
  language: string
  langToggleLink?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const { t } = useTranslation('common')
  return (
    <>
      <nav
        role="navigation"
        aria-label={t('skipToMainContent')}
        className="absolute w-px h-px -left-96 focus-within:w-screen focus-within:h-auto focus-within:top-4 focus-within:z-50 focus-within:flex focus-within:justify-center"
      >
        <a
          id="skipToMainContent"
          className="bg-blue-800 text-white px-2 focus:outline-black-solid hover:bg-gray-dark"
          href="#homeContent"
          draggable={false}
        >
          {t('skipToMainContent')}
        </a>
      </nav>

      <header>
        <div className="container mx-auto px-6 flex-col flex md:flex md:flex-row justify-between pt-6">
          <div className="flex flex-row justify-between items-center lg:mt-7">
            <a href={t('gocLink')}>
              <img
                className="h-5 w-auto xs:h-6 sm:h-8 md:h-8 lg:h-7 xl:h-8"
                src={
                  props.language === 'en'
                    ? '/assets/sig-blk-en.svg'
                    : '/assets/sig-blk-fr.svg'
                }
                alt={
                  props.language === 'en'
                    ? 'Government of Canada'
                    : 'Gouvernement du Canada'
                }
              />
            </a>

            {/* Language selector for small screens */}
            <Link
              key={props.language}
              href={props.langToggleLink || '/'}
              locale={props.language === 'en' ? 'fr' : 'en'}
              className="block md:hidden md:text-sm ml-6 pb-2 sm:ml-16 underline font-body font-bold text-[#284162] text-base hover:text-[#0535d2]"
              lang={props.language === 'en' ? 'fr' : 'en'}
            >
              {props.language === 'en' ? 'FR' : 'EN'}
            </Link>
          </div>

          <div className="flex-col flex">
            {/* Language selector for mid to larger screens */}
            <Link
              key={props.language}
              href={props.langToggleLink || '/'}
              locale={props.language === 'en' ? 'fr' : 'en'}
              className="md:block hidden pb-0 lg:pb-4 self-end underline font-body text-[#284162] hover:text-[#0535d2] "
              data-cy="toggle-language-link"
              lang={props.language === 'en' ? 'fr' : 'en'}
            >
              {props.language === 'en' ? 'Français' : 'English'}
            </Link>
          </div>
        </div>

        <div className="mb-2 border-t pb-2 mt-4"></div>
      </header>
    </>
  )
}

export default Header
