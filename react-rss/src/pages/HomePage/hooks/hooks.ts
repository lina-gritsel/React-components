import { useEffect, useState } from 'react'

import { Сharacter, getCharacter, fetchAllCharacters } from '../../../api'
import { useModal } from '../../../components/Modal'

export const useHomePage = () => {
  const savedSearchValue = localStorage.getItem('search') as string

  const [searchString, setSearchString] = useState<string>(savedSearchValue)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [сharacters, setCharacters] = useState<Сharacter[]>([])

  const onChangeSearch = (value: any) => {
    setSearchString(value)
    localStorage.setItem('search', value)
  }

  useEffect(() => {
    const findCharacter = async () => {
      const characters = await fetchAllCharacters(searchString)
      setCharacters(characters.results)
    }
    findCharacter()

    if (!сharacters) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [])

  const onSubmit = async () => {
    const characters = await fetchAllCharacters(savedSearchValue)
    setCharacters(characters.results)
  }

  return {
    searchString,
    onChangeSearch,
    isLoading,
    сharacters,
    setCharacters,
    onSubmit,
  }
}

export const getInfoCharacter = () => {
  const {
    visible: modalVisible,
    open: openModal,
    close: closeModal,
  } = useModal()

  const [selectCharacter, setSelectCharacter] = useState<Сharacter | null>(null)

  const showInfoProduct = async (id: number) => {
    const characterInfo = await getCharacter(id)
    openModal()
    setSelectCharacter(characterInfo)
  }

  return {
    showInfoProduct,
    selectCharacter,
    modalVisible,
    closeModal,
  }
}
