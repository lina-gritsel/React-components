import { useState, useEffect } from 'react'
import { Character, fetchAllCharacters } from '../../../api'

type UseFetchCharacters = (searchString: string) => {
  characters: Character[]
  isLoading: boolean
}

export const useFetchCharacters: UseFetchCharacters = (searchString) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const { results } = await fetchAllCharacters(searchString)
      setCharacters(results)
      setIsLoading(false)
    })()
  }, [searchString])

  return { characters, isLoading }
}
