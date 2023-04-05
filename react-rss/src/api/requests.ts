const BASE_URL = 'https://rickandmortyapi.com/api/character'

type FetchAllCharacters = (props: string) => Promise<any>

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

export const getCharacter = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
