import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import languageReducer from './reducers/languageReducer'
import popUpReducer from './reducers/popUpReducer'


export default combineReducers({
  popUp: popUpReducer,
  language: languageReducer,
  form: formReducer
})