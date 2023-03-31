import { render, fireEvent } from '@testing-library/react'
import Input from '../components/SearchInput'

describe('Input component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('input value change', () => {
    const { getByPlaceholderText } = render(<Input />)
    const input = getByPlaceholderText('Search') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
