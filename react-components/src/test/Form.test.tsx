import { render, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputCategory from '../pages/FormsPage/components/InputSelect'
import InputBirth from '../pages/FormsPage/components/InputDate'
import InputName from '../pages/FormsPage/components/Input'
import FileInput from '../pages/FormsPage/components/FileInput'
import Switcher from '../pages/FormsPage/components/RadioButton'
import Checkbox from '../pages/FormsPage/components/Checkbox'
import FormPage from '../pages/FormsPage'
import Button from '../components/Button'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

describe('render all inputs in form', () => {
  test('render input name', () => {
    const { getByText } = render(<InputName />)
    const inputTitle = getByText(/name/i)
    expect(inputTitle).toBeInTheDocument()
  })

  test('render category input', () => {
    const { getByText } = render(<InputCategory />)
    const inputTitle = getByText(/What do you want to order/i)
    expect(inputTitle).toBeInTheDocument()
  })

  test('render birth input', () => {
    const { getByText } = render(<InputBirth />)
    const inputTitle = getByText(/date of birth:/i)
    expect(inputTitle).toBeInTheDocument()
  })

  test('render checkbox input', () => {
    const { getByText } = render(<Checkbox />)
    const inputTitle = getByText(/Consent to the data processing/i)
    expect(inputTitle).toBeInTheDocument()
  })

  it('button submit in form', () => {
    const { getByRole } = render(<Button />)
    const existButton = getByRole('button')
    expect(existButton).toBeInTheDocument()
  })

  it('fileInput created', () => {
    const ref = React.createRef<HTMLInputElement>()
    const { getByText } = render(<FileInput forwardedRef={ref} />)
    const fileInput = getByText(/Add image/i)
    expect(fileInput).toBeInTheDocument()
  })
})

describe('radio button', () => {
  it('renders 2 radio elements', () => {
    const { getAllByRole } = render(<Switcher />)
    const radios = getAllByRole('radio')
    expect(radios.length).toBe(2)
  })
})

describe('Select', () => {
  it('renders select with 4 options', () => {
    const { getAllByTestId } = render(<InputCategory />)
    const options = getAllByTestId('select-option')
    expect(options.length).toBe(5)
  })
})

describe('Expected form in DOM', () => {
  it('Form created', async () => {
    const { getByTestId, getByRole } = render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    )
    await act(async () => {
      const checkbox = getByTestId('check')
      await userEvent.click(checkbox)
      expect(checkbox).toBeChecked()
      const submitButton = getByRole('button')
      expect(submitButton).toBeInTheDocument()
    })
  })
})
