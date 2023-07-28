/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../src/pages/index'

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
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  it('should render the page', () => {
    render(<Index locale="en" />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
})
