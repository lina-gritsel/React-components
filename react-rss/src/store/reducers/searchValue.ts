import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'toolkit',
  initialState: {
    searchValue: '',
  },
  reducers: {
    changeSearchValue(state, action){
      state.searchValue = action.payload
    }
  }
})

export default searchSlice.reducer
export const {changeSearchValue} = searchSlice.actions
