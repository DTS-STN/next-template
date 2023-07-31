import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../../src/components/Footer'

describe('Footer', () => {
  it('renders Footer with links', () => {
    render(
      <Footer
        footerLogoAltText="testAltText"
        footerLogoImage="testImage"
        footerBoxLinks={[
          {
            footerBoxlink: 'footerContactUsURL',
            footerBoxLinkText: 'footerContactUs',
          },
          {
            footerBoxlink: 'footerNewsURL',
            footerBoxLinkText: 'footerNews',
          },
        ]}
        links={[
          {
            link: 'https://some-link-1.com',
            linkText: 'some-link-1',
          },
          {
            link: 'https://some-link-2.com',
            linkText: 'some-lin-2',
          },
          {
            link: 'https://some-link-3.com',
            linkText: 'some-link-3',
          },
          {
            link: 'https://some-link-4.com',
            linkText: 'some-link-4',
          },
        ]}
      />,
    )
    const footerLink = screen.getByText('some-link-4')
    expect(footerLink).toBeInTheDocument()
  })
})
