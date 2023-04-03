import { useEffect, useState } from 'react'

interface Rating {
  rate: number
  count: number
}

export interface Product {
  title: string
  price: number
  description: string
  category: string
  image: string
  id?: number
  rating?: Rating
}

export const usrFetchAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const allProducts = await fetch(
          'https://strange-shawl-mite.cyclic.app/products'
        )
        const response = await allProducts.json()
        console.log(response.products)
        setProducts(response.products)
      } catch (error) {
        return
      } finally {
        setIsLoading(false)
      }
    }
    getAllProducts()
  }, [])

  return { products, isLoading }
}
