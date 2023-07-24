/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../src/pages/index'
import { getStaticProps } from '../../src/pages/index'

import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// 'Mock' call to fetchContent
jest.mock('../../src/lib/cms', () => ({
  fetchContent: () => {
    return {}
  },
}))

describe('index page', () => {
  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Next Template - Canada.ca',
      desc: 'English',
      author: 'Service Canada',
      keywords: '',
    },
    data_fr: {
      title: 'Next Template - Canada.ca',
      desc: 'Français',
      author: 'Service Canada',
      keywords: '',
    },
  }

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  it('should render the page', () => {
    render(<Index locale="en" meta={meta} />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })
    const nonI18nProps = Object.keys(props.props)
      .filter((k) => k !== '_nextI18Next')
      .reduce((a, k) => ({ ...a, [k]: props.props[k] }), {})
    expect(nonI18nProps).toEqual({
      locale: 'en',
      meta: {
        data_en: {
          desc: 'English',
          author: 'Service Canada',
          keywords: '',
          title: 'Next Template - Canada.ca',
        },
        data_fr: {
          author: 'Service Canada',
          desc: 'Français',
          keywords: '',
          title: 'Next Template - Canada.ca',
        },
      },
    })
  })
})
