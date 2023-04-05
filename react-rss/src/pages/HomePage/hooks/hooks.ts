import { useEffect, useState } from 'react'

import {
  Сharacter,
  useFetchAllProducts,
  getCharacter,
  getСharacterBySearch,
} from '../../../api'

import { useModal } from '../../../components/Modal'

export const useHomePage = () => {
  const { сharacters, isLoading } = useFetchAllProducts()
  const savedSearchValue = localStorage.getItem('search') as string

  const [searchString, setSearchString] = useState<string>(savedSearchValue)
  const [searchCharacters, setSearchCharacters] = useState([])
  const [currentCharacters, setCurrentCharacters] = useState<Сharacter[]>([])

  const onChangeSearch = (value: string) => {
    setSearchString(value)
    localStorage.setItem('search', value)
  }

  useEffect(() => {
    if (searchCharacters.length) {
      setCurrentCharacters(searchCharacters)
    } else {
      setCurrentCharacters(сharacters)
    }
  }, [searchCharacters, сharacters])

  const findCharacter = async (name: string) => {
    const { results } = await getСharacterBySearch(name)
    setSearchCharacters(results)
  }

  return {
    searchString,
    onChangeSearch,
    isLoading,
    findCharacter,
    currentCharacters,
  }
}

export const getInfoproduct = () => {
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
