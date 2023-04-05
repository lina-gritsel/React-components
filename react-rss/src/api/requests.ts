import { Сharacter } from './types'

const ALL_CHARACTERS = 'https://rickandmortyapi.com/api/character'

import { useEffect, useState } from 'react'

export const useFetchAllProducts = () => {
  const [сharacters, setCharacters] = useState<Сharacter[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(ALL_CHARACTERS)
        const { results } = await response.json()
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

export const getCharacter = async (id: number) => {
  try {
    const response = await fetch(`${ALL_CHARACTERS}/${id}`)
    const characterInfo = await response.json()
    return characterInfo
  } catch (error) {
    return error
  }
}

export const getСharacterBySearch = async (name: string) => {
  try {
    const response = await fetch(`${ALL_CHARACTERS}/?name=${name}`)
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}
