export interface ICardData {
  name?: string
  birth?: string
  category?: string
  image?: string
  checkbox?: string
  switcher?: string
}

export interface IState {
  cardsData: ICardData[]
  errors: IErors
}

interface IErors {
  name?: string
}
