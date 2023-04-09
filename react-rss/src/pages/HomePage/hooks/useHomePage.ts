import { useEffect, useRef, useState } from 'react'

import { useFetchCharacters } from './useFetchCharacters'

export const useHomePage = () => {
  const savedSearchValue = localStorage.getItem('search') as string

  const [searchString, setSearchString] = useState<string>(savedSearchValue)
  const [submitedString, setSubmitedString] = useState<string>(savedSearchValue)
  const { isLoading, characters } = useFetchCharacters(submitedString)

  const onChangeSearch = (value: string) => {
    setSearchString(value)
  }

  const onSubmit = () => {
    setSubmitedString(searchString)
    localStorage.setItem('search', searchString)
  }

  const searchRef = useRef<string>()

  useEffect(() => {
    searchRef.current = searchString
  }, [searchString])

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchRef.current || '')
    }
  }, [])

  return {
    searchString,
    onChangeSearch,
    isLoading,
    characters,
    onSubmit,
  }
}


