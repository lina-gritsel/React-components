import { combineReducers } from '@reduxjs/toolkit'
import toolkitSlice from './search'

export const rootReducer = combineReducers({ toolkit: toolkitSlice })
