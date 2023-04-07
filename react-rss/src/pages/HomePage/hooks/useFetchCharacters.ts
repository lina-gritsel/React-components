import { useState, useEffect } from 'react'
import { Сharacter, fetchAllCharacters } from '../../../api'

type UseFetchCharacters = (searchString: string) => {
  сharacters: Сharacter[]
  isLoading: boolean
}

export const useFetchCharacters: UseFetchCharacters = (searchString) => {
  const [сharacters, setCharacters] = useState<Сharacter[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      const { results } = await fetchAllCharacters(searchString)
      setCharacters(results)
    })()
    setIsLoading(false)
  }, [searchString])

  return { сharacters, isLoading }
}
