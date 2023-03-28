import { useEffect, useState } from 'react'
import { Product } from './types'

export const useCardsListHome = (searchValue: string) => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsLoaded(true)
        const allProducts = await fetch('https://fakestoreapi.com/products')
        const response = await allProducts.json()
        setProducts(response)
      } catch {
        setError(error)
      }
    }
    getAllProducts()
  }, [error])

  const filterProducts = products.filter((item) => {
    return (
      item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
      item.price.toString().toLowerCase().indexOf(searchValue.toLowerCase()) !==
        -1 ||
      item.description.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    )
  })

  return { filterProducts, isLoaded, error }
}
