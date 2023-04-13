import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCharacters = createAsyncThunk(
  'fetchCharacters',
  async (_, thunkAPI) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const data = await response.json()
    return data.results
  }
)
