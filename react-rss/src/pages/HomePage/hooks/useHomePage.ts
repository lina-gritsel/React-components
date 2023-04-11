import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initialState } from './../../../store/reducers/search'
import { changeSearchValue } from '../../../store/actions/search'

import { useFetchCharacters } from './useFetchCharacters'

export const useHomePage = () => {
  const storeSearchValue = useSelector(
    (state: typeof initialState) => state?.searchValue
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
