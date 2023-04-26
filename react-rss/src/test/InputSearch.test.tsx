import { render, fireEvent,screen } from '@testing-library/react'
import Input from '@/components/SearchInput'

describe('Input component', () => {
  const testProps = {
    name: 'test',
    onSubmit: () => {},
   }

  afterEach(() => {
    localStorage.clear()
  })

  it('input value change', () => {
    const { getByPlaceholderText } = render(<Input {...testProps} />)
    const input = getByPlaceholderText('Search...') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})

describe('Search', () => {
  it('renders Search component', () => {
    render(<Input name="search" onSubmit={() => {}} />)
    const inputSearch = screen.getByRole('search')
    expect(inputSearch).toBeInTheDocument()
  })
})
