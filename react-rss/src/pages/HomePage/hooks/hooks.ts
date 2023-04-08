import { useEffect, useRef, useState } from 'react'
import { Product, usrFetchAllProducts } from '../../../api'

export const useHomePage = () => {
  const { products, isLoading } = usrFetchAllProducts()
  const savedSearchValue = localStorage.getItem('search') as string

  const [searchString, setSearchString] = useState<string>(savedSearchValue || '')

  const searchRef = useRef<string>()

  useEffect(() => {
    searchRef.current = searchString
  }, [searchString])

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchRef.current || '')
    }
  },[])

  const onChangeSearch = (value: string) => {
    setSearchString(value)
  }

  const filteredProducts = products.filter((product: Product) => {
    const productName = product.title
    const productPrice = product.price.toString()
    const productDescription = product.description
    const filterableItems = [productName, productPrice, productDescription]

    return filterableItems
      .join('')
      .toUpperCase()
      .includes(savedSearchValue?.toUpperCase())
  })

  return {
    searchString,
    filteredProducts,
    isLoading,
    onChangeSearch
  }
}
