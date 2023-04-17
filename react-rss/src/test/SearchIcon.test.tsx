import { render } from '@testing-library/react'

import { Search } from '@/assets/icons/Search'

describe('Search icon render', () => {
  it('renders search icon', () => {
    const { getByRole } = render(<Search />)
    const searchIcon = getByRole('searchIcon')
    expect(searchIcon).toBeInTheDocument()
  })
})
