import { render, screen } from '@testing-library/react'
import { Сharacter } from '../api'
import Modal from '../components/Modal'

describe('render modal with api data', () => {
  const data: Сharacter = {
    created: '2017-12-29T11:40:25.135Z',
    episode: [
      'https://rickandmortyapi.com/api/episode/18',
      'https://rickandmortyapi.com/api/episode/19',
    ],
    gender: 'Female',
    id: 148,
    image: 'https://rickandmortyapi.com/api/character/avatar/148.jpeg',
    name: 'Goddess Beth',
    species: 'Mythological Creature',
    status: 'unknown',
    type: 'Goddess',
    url: 'https://rickandmortyapi.com/api/character/1',
  }

  beforeEach(() => {
    render(<Modal modalVisible={false} character={data} onClose={() => {}} />)
  })
  it('renders card with species', () => {
    expect(screen.getByText(data.species)).toBeInTheDocument()
  })
})
