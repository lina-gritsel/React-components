import { useEffect, useState } from 'react'

export const useHomePage = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const currentSearchValue = localStorage.getItem('searchValue')
    if (currentSearchValue) {
      setSearch(currentSearchValue)
    }
  }, [])

  return { search, setSearch }
}


// const setSearchValue = (value: string) => {
//   onChange(value)
//   localStorage.setItem('searchValue', value)
// }
