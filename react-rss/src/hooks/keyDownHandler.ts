import { fetchAllCharacters } from '../api'

export const submitByKeyDown = (setCharacters: (value: []) => void) => {
  const keyDownHandler = async (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      const savedSearchValue = localStorage.getItem('search') as string

      const characters = await fetchAllCharacters(savedSearchValue)
      setCharacters(characters.results)
    }
  }

  document.addEventListener('keydown', keyDownHandler)

  return () => {
    document.removeEventListener('keydown', keyDownHandler)
  }
}
