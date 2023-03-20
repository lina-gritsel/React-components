import { render } from '@testing-library/react'
import About from '../pages/AboutUsPage'
import { BrowserRouter } from 'react-router-dom'

it('display About page', async () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  )
})
