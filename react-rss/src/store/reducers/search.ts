import { searchActions } from '../actions/search'

export const initialState = {
  searchValue: '',
}

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case searchActions.CHANGE_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      }
    }
    default:
      return state
  }
}
