import { searchActions } from '../actions/search'

const initialState = {
  searchValue: '',
}

const searchValue = (state = initialState, action) => {
  switch (action.type) {
    case searchActions.CHANGE_SEARCH_VALUE: {
        return {
            ...state,
            searchValue: action.payload
        }
    }
  }
}

export default searchValue