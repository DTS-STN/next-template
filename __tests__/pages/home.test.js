/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../src/pages/home'
import { getStaticProps } from '../../src/pages/home'

import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

//
jest.mock('../../src/lib/cms', () => ({
  fetchContent: () => {
    return {}
  },
}))

describe('Home page', () => {
  const content = {
    header: 'header',
    paragraph: 'paragraph',
  }

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  it('should render the page', () => {
    render(<Home locale="en" content={content} />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })
    const nonI18nProps = Object.keys(props.props)
      .filter((k) => k !== '_nextI18Next')
      .reduce((a, k) => ({ ...a, [k]: props.props[k] }), {})
    expect(nonI18nProps).toEqual({
      content: {},
      langToggleLink: '/fr/home',
      locale: 'en',
    })
  })
})
