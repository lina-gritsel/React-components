import { Сharacter } from './types'

const BASE_URL = 'https://rickandmortyapi.com/api/character'

type FetchAllCharacters = (props: string) => Promise<Сharacter[]>

export const fetchAllCharacters: FetchAllCharacters = async (props) => {
  const queryParam = props ? `?name=${props}` : ''

  try {
    const response = await fetch(`${BASE_URL}/${queryParam}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

type FetchCharacter = (id: number) => Promise<Сharacter>

export const fetchCharacter: FetchCharacter = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
