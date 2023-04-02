import { useState } from 'react'
import { usrFetchAllProducts } from './useFetchAllProducts'

export const useHomePage = () => {
  const { products, isLoading } = usrFetchAllProducts()

  const [searchString, setSearchString] = useState<string>('')

  const onChangeSearch = (value: string) => {
    setSearchString(value)
    localStorage.setItem('search', value)
  }

  const savedSearchValue = localStorage.getItem('search') as string

  const filteredProducts = products.filter((product) => {
    const productName = product.title
    const productPrice = product.price.toString()
    const productDescription = product.description
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
    savedSearchValue,
  }
}
