import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { render, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormPage from '../pages/FormsPage'
import store from '../store/store'

const storeApp = store()

describe('Expected form in DOM', () => {
  it('Form created', async () => {
    const { getByTestId, getByRole } = render(
      <BrowserRouter>
        <Provider store={storeApp}>
          <FormPage />
        </Provider>
      </BrowserRouter>
    )

    const existButton = getByRole('button')
    expect(existButton).toBeInTheDocument()

    await act(async () => {
      const checkbox = getByTestId('check')
      await userEvent.click(checkbox)
      expect(checkbox).toBeChecked()
      const submitButton = getByRole('button')
      expect(submitButton).toBeInTheDocument()
    })
  })
})
