import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormPage from '../pages/FormsPage'

describe('Expected form in DOM', () => {
  it('Form created', async () => {
    const { getByTestId, getByRole } = render(
      <BrowserRouter>
        <FormPage />
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
