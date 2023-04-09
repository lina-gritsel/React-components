export interface Сharacter {
  created: string
  id: number
  episode: string[]
  gender: string
  image: string
  name: string
  status: string
  species: string
  type: string
  url: string
}

export interface ResponseOnAllCharacters {
  info: ResponseInfo
  results: Сharacter[]
}

interface ResponseInfo {
  count: number
  next: string
  pages: number
  prev: null
}
