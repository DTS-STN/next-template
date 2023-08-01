import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateModified from '../../src/components/DateModified'

describe('DateModified', () => {
  it('renders dateModified', () => {
    const primary = render(<DateModified {...DateModified.args} />)
    expect(primary).toBeTruthy()
  })
})
