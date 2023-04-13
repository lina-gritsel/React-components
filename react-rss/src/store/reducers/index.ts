import { combineReducers } from '@reduxjs/toolkit'
import searchSlice from './searchValue'
import formsSlice from './forms'
import { charactersAPI } from '../services/CharactersService'

export const rootReducer = combineReducers({
  search: searchSlice,
  forms: formsSlice,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
