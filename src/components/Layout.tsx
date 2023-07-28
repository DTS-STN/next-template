import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useTranslation } from 'next-i18next'

interface LayoutProps {
  children: ReactNode
  locale?: string
  title?: string
  langToggleLink?: string
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Header
        language={props.locale ?? 'en'}
        langToggleLink={props.langToggleLink}
      />

      <main>
        <div>{props.children}</div>
      </main>

      <Footer
        footerLogoAltText="symbol2"
        footerLogoImage="/assets/wmms-blk.svg"
        footerNav1="aboutGovernment"
        footerNav2="aboutThisSite"
        links={[
          {
            link: t('footerSocialMediaURL'),
            linkText: t('footerSocialMedia'),
          },
          {
            link: t('footerMobileAppURL'),
            linkText: t('footerMobileApp'),
          },
          {
            link: t('footerAboutURL'),
            linkText: t('footerAbout'),
          },
          {
            link: t('footerTermsAndConditionURL'),
            linkText: t('footerTermsAndCondition'),
          },
          {
            link: t('footerPrivacyURL'),
            linkText: t('footerPrivacy'),
          },
        ]}
        footerBoxLinks={[
          {
            footerBoxlink: t('footerContactUsURL'),
            footerBoxLinkText: t('footerContactUs'),
          },
          {
            footerBoxlink: t('footerNewsURL'),
            footerBoxLinkText: t('footerNews'),
          },
          {
            footerBoxlink: t('footerPmURL'),
            footerBoxLinkText: t('footerPm'),
          },
          {
            footerBoxlink: t('footerDepartmentAgenciesURL'),
            footerBoxLinkText: t('footerDepartmentAgencies'),
          },
          {
            footerBoxlink: t('footerTreatiesURL'),
            footerBoxLinkText: t('footerTreaties'),
          },
          {
            footerBoxlink: t('footerHowGovWorksURL'),
            footerBoxLinkText: t('footerHowGovWorks'),
          },
          {
            footerBoxlink: t('footerPublicServiceURL'),
            footerBoxLinkText: t('footerPublicService'),
          },
          {
            footerBoxlink: t('footerGovReportingURL'),
            footerBoxLinkText: t('footerGovReporting'),
          },
          {
            footerBoxlink: t('footerOpenGovURL'),
            footerBoxLinkText: t('footerOpenGov'),
          },
        ]}
      />
    </>
  )
}

Layout.defaultProps = {
  title: 'Next Template - Canada.ca',
}

export default Layout
