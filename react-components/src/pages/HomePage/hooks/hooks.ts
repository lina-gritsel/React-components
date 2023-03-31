import { useState } from 'react'
import { usrFetchAllProducts } from './useFetchAllProducts'

export const useHomePage = () => {
  const { products, isLoading } = usrFetchAllProducts()

  const [searchString, setSearchString] = useState<string>('')

  const filteredProducts = products.filter((product) => {
    const productName = product.title
    const productPrice = product.price.toString()
    const productDescription = product.description
    const filterableItems = [productName, productPrice, productDescription]

    return filterableItems
      .join('')
      .toUpperCase()
      .includes(searchString.toUpperCase())
  })

  return { searchString, setSearchString, filteredProducts, isLoading }
}
