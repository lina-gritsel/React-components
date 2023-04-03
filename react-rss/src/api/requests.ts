import { Product } from './types'

const baseUrl = 'https://strange-shawl-mite.cyclic.app'

import { useEffect, useState } from 'react'

export const usrFetchAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const result = await fetch(`${baseUrl}/products`)
        const { products } = await result.json()
        setProducts(products)
      } catch (error) {
        return error
      } finally {
        setIsLoading(false)
      }
    }
    getAllProducts()
  }, [])

  return { products, isLoading }
}
