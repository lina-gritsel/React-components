import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import HomePage from '../pages/HomePage'
import store from '../store/store'

const storeApp = store()

describe('Home Page', () => {
  it('renders Home Page', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={storeApp}>
          <HomePage />
        </Provider>
      </BrowserRouter>
    )
    const home = getByTestId('homeContainer')
    expect(home).toBeInTheDocument()
  })
})
