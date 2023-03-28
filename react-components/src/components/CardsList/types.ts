export interface Rating {
  rate: number
  count: number
}

export interface Product {
  title: string
  price: number
  description: string
  category: string
  image: string
  id?: number
  rating?: Rating
}

export interface ResponseProducts {
  error: null | string
  isLoaded: boolean
  items: Product[]
  search: string
}

export interface CardsListProps {
  searchValue: string
}
