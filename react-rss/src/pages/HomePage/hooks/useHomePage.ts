import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { changeSearchValue } from '../../../store/reducers/search'
import { useAppSelector } from '../../../store/hooks/redux'

import { useFetchCharacters } from './useFetchCharacters'

export const useHomePage = () => {
  const storeSearchValue = useAppSelector(
    (state) => state?.toolkit.searchValue
  )

  const dispatch = useDispatch()

  const [searchString, setSearchString] = useState<string>(storeSearchValue)
  const { isLoading, characters } = useFetchCharacters(storeSearchValue)

  const onChangeSearch = (value: string) => {
    setSearchString(value)
  }

  const onSubmit = () => {
    dispatch(changeSearchValue(searchString))
  }

  return {
    searchString,
    onChangeSearch,
    isLoading,
    characters,
    onSubmit,
  }
}
