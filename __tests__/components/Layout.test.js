import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Layout from '../../src/components/Layout'
import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

expect.extend(toHaveNoViolations)

describe('Layout with default text', () => {
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

  useRouter.mockImplementation(() => ({
    pathname: '/',
    asPath: '/',
  }))

  it('Layout contains Symbol of GoC', () => {
    render(<Layout locale="en" meta={meta} />)
    expect(screen.getByAltText('Government of Canada')).toBeInTheDocument()
  })

  it('Layout contains Language link', () => {
    render(<Layout locale="en" meta={meta} />)
    expect(screen.getByText('Français')).toBeInTheDocument()
  })

  it('Layout contains a Main tag', () => {
    render(<Layout locale="en" meta={meta} />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('Layout contains Canada Wordmark', () => {
    render(<Layout locale="en" meta={meta} />)
    expect(screen.getByAltText('symbol2')).toBeInTheDocument()
  })

  it('Layout contains no a11y violations', async () => {
    const { container } = render(<Layout locale="en" meta={meta} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
