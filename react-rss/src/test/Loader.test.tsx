import { render } from '@testing-library/react'
import Loader from '@/components/Loader'

describe('Loader', () => {
  it('renders Loader component', () => {
    const { getByRole } = render(<Loader />)
    const modalText = getByRole('svg')
    expect(modalText).toBeInTheDocument()
  })
})
