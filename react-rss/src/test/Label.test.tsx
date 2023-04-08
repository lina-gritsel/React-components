import { render } from '@testing-library/react'
import Label from '../assets/icons/Label'

describe('Loader', () => {
  it('renders Loader component', () => {
    const { getByRole } = render(<Label />)
    const label = getByRole('label')
    expect(label).toBeInTheDocument()
  })
})
