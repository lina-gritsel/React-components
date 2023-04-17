import { useState } from 'react'

import { useAppSelector } from '../../../store/hooks/redux'
import { useActions } from '../../../store/ActionCreators'

import { useFetchCharacters } from './useFetchCharacters'

export const useHomePage = () => {
  const storeSearchValue = useAppSelector((state) => state?.search.searchValue)

  const { changeSearchValue } = useActions()

  const [searchString, setSearchString] = useState<string>(storeSearchValue)
  const { isLoading, characters } = useFetchCharacters(storeSearchValue)

  const onChangeSearch = (value: string) => {
    setSearchString(value)
  }

  const onSubmit = () => {
    changeSearchValue(searchString)
  }

  return {
    searchString,
    onChangeSearch,
    isLoading,
    characters,
    onSubmit,
  }
}
