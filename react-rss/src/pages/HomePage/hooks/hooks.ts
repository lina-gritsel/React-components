import { useState } from 'react'

import { Сharacter, getCharacter } from '../../../api'
import { useModal } from '../../../components/Modal'

import { useFetchCharacters } from './useFetchCharacters'

export const useHomePage = () => {
  const savedSearchValue = localStorage.getItem('search') as string

  const [searchString, setSearchString] = useState<string>(savedSearchValue)
  const [submitedString, setSubmitedString] = useState<string>(savedSearchValue)
  const { isLoading, сharacters } = useFetchCharacters(submitedString)

  const onChangeSearch = (value: string) => {
    setSearchString(value)
  }

  return {
    searchString,
    onChangeSearch,
    isLoading,
    сharacters,
    onSubmit: () => setSubmitedString(searchString),
  }
}

export const useFetchCharacter = () => {
  const {
    visible: modalVisible,
    open: openModal,
    close: closeModal,
  } = useModal()

  const [selectCharacter, setSelectCharacter] = useState<Сharacter | null>(null)

  const onCardClick = async (id: number) => {
    const characterInfo = await getCharacter(id)
    setSelectCharacter(characterInfo)

    openModal()
  }

  return {
    onCardClick,
    selectCharacter,
    modalVisible,
    closeModal,
  }
}
