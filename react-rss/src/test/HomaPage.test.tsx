import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import HomePage from '../pages/HomePage'

describe('Home Page', () => {
  it('renders Home Page', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    const home = getByTestId('homeContainer')
    expect(home).toBeInTheDocument()
  })
})
