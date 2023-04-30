import { combineReducers } from '@reduxjs/toolkit'

import { charactersAPI } from '../services/CharactersService'
import searchSlice from './searchValue'
import formsSlice from './forms'

export const rootReducer = combineReducers({
  search: searchSlice,
  forms: formsSlice,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
