import { useState } from 'react'
import { Product, usrFetchAllProducts } from '../../../api'

export const useHomePage = () => {
  const { products, isLoading } = usrFetchAllProducts()
  const savedSearchValue = localStorage.getItem('search') as string

  const [searchString, setSearchString] = useState<string>(savedSearchValue)

  const onChangeSearch = (value: string) => {
    setSearchString(value)
    localStorage.setItem('search', value)
  }

  const filteredProducts = products.filter((product: Product) => {
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
  }
}
