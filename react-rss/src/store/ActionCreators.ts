import { bindActionCreators } from '@reduxjs/toolkit'

import { changeSearchValue } from './reducers/searchValue'
import { useAppDispatch } from './hooks/redux'
import { addNewForm } from './reducers/forms'

const actions = {
  addNewForm,
  changeSearchValue
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
