import { render } from '@testing-library/react'
import Modal from '../pages/FormsPage/components/Modal'

describe('render popup', () => {
  test('render modal', () => {
    const { getByText } = render(<Modal showModal={false} />)
    const modalText = getByText(/Card is created/i)
    expect(modalText).toBeInTheDocument()
  })
})
