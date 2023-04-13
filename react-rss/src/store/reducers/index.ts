import { combineReducers } from '@reduxjs/toolkit'
import searchSlice from './searchValue'
import { charactersAPI } from '../services/CharactersService'

export const rootReducer = combineReducers({
  search: searchSlice,
[charactersAPI.reducerPath] : charactersAPI.reducer
})

export type RootState = ReturnType<typeof rootReducer>
