import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeSearchValue } from '../../../store/reducers/search'
import { useFetchCharacters } from './useFetchCharacters'
import { RootState } from '../../../store/store'

export const useHomePage = () => {
  const storeSearchValue = useSelector(
    (state: RootState) => state?.toolkit.searchValue
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
