import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from './reducers/search'

const store = configureStore({
  reducer: searchReducer,
})

export default store
