import { charactersAPI } from '../../../store/services/CharactersService'

export const useFetchCharacters = (searchString: string) => {
  const { data, isFetching, error } =
    charactersAPI.useFetchAllCharactersQuery(searchString)

  const characters = data?.results

  if (error) return { characters: [], isFetching }

  return { characters, isLoading: isFetching, error }
}
