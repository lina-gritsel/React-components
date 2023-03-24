import { render } from '@testing-library/react'
import Switcher from '../pages/FormsPage/components/Switcher'
import Button from '../components/Button'
import Checkbox from '../pages/FormsPage/components/Checkbox'
import InputBirth from '../pages/FormsPage/components/InputBirth'
import InputCategory from '../pages/FormsPage/components/InputCategory'
import InputName from '../pages/FormsPage/components/InputName'

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
})

describe('radio button', () => {
  it('renders 2 radio elements', () => {
    const { getAllByRole } = render(<Switcher />)
    const radios = getAllByRole('radio')
    expect(radios.length).toBe(2)
  })
})
