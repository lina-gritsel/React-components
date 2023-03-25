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

export interface IErors {
  name?: string
  birth?: string
  category?: string
  file?: string
  checkbox?: string
}
