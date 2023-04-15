import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers'
import { charactersAPI } from './services/CharactersService'

const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(charactersAPI.middleware)
  })
}

export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']

export default store
