import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/Header'
import en from '../../public/locales/en'
import fr from '../../public/locales/fr'

import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

expect.extend(toHaveNoViolations)

describe('Header', () => {
  useRouter.mockImplementation(() => ({
    pathname: '/',
    asPath: '/',
  }))

  it('renders Header in English', () => {
    render(<Header language="en" t={en} />)
    const HeaderLang = screen.getByText('Français')
    expect(HeaderLang).toBeInTheDocument()
  })

  it('renders Header in French', () => {
    render(<Header language="fr" t={fr} />)
    const HeaderLang = screen.getByText('English')
    expect(HeaderLang).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<Header locale="en" language="en" t={en} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
