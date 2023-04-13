import { Character } from '../../../api'

import { charactersAPI } from '../../../store/services/CharactersService'

type UseFetchCharacters = (searchString: string) => {
  characters: Character[]
  isLoading: boolean
}

export const useFetchCharacters: UseFetchCharacters = (searchString) => {
  const {data, isLoading} = charactersAPI.useFetchAllCharactersQuery(searchString)
  const characters = data?.results

  return { characters, isLoading }
}
