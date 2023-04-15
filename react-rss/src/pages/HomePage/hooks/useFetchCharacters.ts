import { charactersAPI } from '../../../store/services/CharactersService'

export const useFetchCharacters = (searchString: string) => {
  const { data, isLoading } =
    charactersAPI.useFetchAllCharactersQuery(searchString)

  const characters = data?.results

  return { characters, isLoading }
}
