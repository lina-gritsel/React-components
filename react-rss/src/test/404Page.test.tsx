import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Page404 from '../pages/404Page'

describe('display 404 page', () => {
  test('must be rendered successfully', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    )

    const pageText = getByText(/404 Page/i)
    expect(pageText).toBeInTheDocument()
  })
})
