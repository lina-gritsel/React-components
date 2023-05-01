import { charactersAPI } from '../../../store/services/CharactersService'

export const useFetchCharacters = (searchString: string) => {
  const { data, isLoading, error } =
    charactersAPI.useFetchAllCharactersQuery(searchString)

  const characters = data?.results

  if (error) return { characters: [], isLoading }

  return { characters, isLoading, error }
}
