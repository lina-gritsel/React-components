import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import AboutPage from '../pages/AboutUsPage'

describe('Page About', () => {
  test('must be rendered successfully', () => {
    const { getByText } = render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    )

    const pageText = getByText(/About US Page/i)
    expect(pageText).toBeInTheDocument()
  })
})
