import { render } from '@testing-library/react'
import Page404 from '../pages/404Page'
import { BrowserRouter } from 'react-router-dom'

it('display Home page', async () => {
  render(
    <BrowserRouter>
      <Page404 />
    </BrowserRouter>
  )
})
