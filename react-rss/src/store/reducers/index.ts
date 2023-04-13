import { combineReducers } from '@reduxjs/toolkit'
import toolkitSlice from './search'
import { charactersAPI } from '../services/CharactersService'

export const rootReducer = combineReducers({
  toolkit: toolkitSlice,
[charactersAPI.reducerPath] : charactersAPI.reducer
})

export type RootState = ReturnType<typeof rootReducer>
