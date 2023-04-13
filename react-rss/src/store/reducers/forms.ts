import { createSlice } from '@reduxjs/toolkit'
import { ICardData } from '../../pages/FormsPage/hooks'

type formsState = {
  forms: ICardData[]
}

const initialState: formsState = {
  forms: [],
}

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addNewForm(state, action) {
      state.forms.push(action.payload)
    },
  },
})

export default formsSlice.reducer
export const { addNewForm } = formsSlice.actions
