import { useState } from 'react'
import { Сharacter, usrFetchAllProducts, getCharacter } from '../../../api'

export const useHomePage = () => {
  const { сharacters, isLoading } = usrFetchAllProducts()
  const savedSearchValue = localStorage.getItem('search') as string

  const [searchString, setSearchString] = useState<string>(savedSearchValue)

  const onChangeSearch = (value: string) => {
    setSearchString(value)
    localStorage.setItem('search', value)
  }

  const filteredProducts = сharacters.filter((сharacter: Сharacter) => {
    const productName = сharacter.name
    const productPrice = сharacter.gender
    const productDescription = сharacter.species
    const filterableItems = [productName, productPrice, productDescription]

    return filterableItems
      .join('')
      .toUpperCase()
      .includes(savedSearchValue.toUpperCase())
  })

  return {
    searchString,
    onChangeSearch,
    filteredProducts,
    isLoading,
  }
}

export const getInfoproduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [selectCharacter, setSelectCharacter] = useState<Сharacter | null>(null)

  const showInfoProduct = async (id: number) => {
    const characterInfo = await getCharacter(id)
    setModalIsOpen(true)
    setSelectCharacter(characterInfo)
  }

  return { modalIsOpen, showInfoProduct, selectCharacter, setModalIsOpen }
}
