import { Сharacter } from './types'

const ALL_CHARACTERS = 'https://rickandmortyapi.com/api/character'

import { useEffect, useState } from 'react'

export const usrFetchAllProducts = () => {
  const [сharacters, setCharacters] = useState<Сharacter[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(ALL_CHARACTERS)
        const { results } = await response.json()
        console.log(results)
        setCharacters(results)
      } catch (error) {
        return error
      } finally {
        setIsLoading(false)
      }
    }
    getAllProducts()
  }, [])

  return { сharacters, isLoading }
}
