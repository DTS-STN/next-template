import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from '../../src/components/Layout'
import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Layout with default text', () => {
  useRouter.mockImplementation(() => ({
    pathname: '/',
    asPath: '/',
  }))

  it('Layout contains Symbol of GoC', () => {
    render(<Layout locale="en" />)
    expect(screen.getByAltText('Government of Canada')).toBeInTheDocument()
  })

  it('Layout contains Language link', () => {
    render(<Layout locale="en" />)
    expect(screen.getByText('Français')).toBeInTheDocument()
  })

  it('Layout contains a Main tag', () => {
    render(<Layout locale="en" />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('Layout contains Canada Wordmark', () => {
    render(<Layout locale="en" />)
    expect(screen.getByAltText('symbol2')).toBeInTheDocument()
  })
})
