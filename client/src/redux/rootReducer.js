import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import popUpReducer from './reducers/popUpReducer'


export default combineReducers({
  popUp: popUpReducer,
  form: formReducer
})