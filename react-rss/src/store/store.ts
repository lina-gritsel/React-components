import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
})

export default store