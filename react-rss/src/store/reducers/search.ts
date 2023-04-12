import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
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

export default toolkitSlice.reducer
export const {changeSearchValue} = toolkitSlice.actions
