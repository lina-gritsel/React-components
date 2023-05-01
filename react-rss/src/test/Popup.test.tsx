import { render } from '@testing-library/react'
import Modal from '../pages/FormsPage/components/Modal'

describe('Popup', () => {
  it('renders Popup component', () => {
    const { getByText } = render(<Modal showModal={true} />)
    const modalText = getByText(/Card is created/i)
    expect(modalText).toBeInTheDocument()
  })
})
