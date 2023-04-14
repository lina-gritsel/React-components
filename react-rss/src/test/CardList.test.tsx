import { screen, render, waitFor } from '@testing-library/react'

import CardsList from '../pages/FormsPage/components/CardsList'
import { ICardData } from '../pages/FormsPage/hooks'

describe('Card', () => {
  const cards: ICardData[] = [
    {
      name: 'Erich',
      date: '21.01.1991',
      category: 'Kategorie 1',
      file: 'https://www.google.com/images/branding/googlelogo/2',
      checkbox: 'yes',
      radio: 'yes',
    },
    {
      name: 'Erich',
      date: '21.01.1991',
      category: 'Kategorie 1',
      file: 'https://www.google.com/images/branding/googlelogo/2',
      checkbox: 'yes',
      radio: 'yes',
    },
  ]

  it('renders card', () => {
    render(<CardsList cards={cards} />)
    waitFor(() =>
      expect(screen.findAllByText(cards[0].name)).toBeInTheDocument()
    )
    waitFor(() =>
    expect(screen.findAllByText(cards[1].name)).toBeInTheDocument()
  )
  })
})
