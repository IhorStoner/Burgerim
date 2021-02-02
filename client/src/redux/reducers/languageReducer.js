import { createReducer } from "@reduxjs/toolkit";
import { changeLanguage } from '../actions/languageAction';

const initialState = {
  language: 'UKR',
};

const languageReducer = createReducer(initialState, {
  [changeLanguage.type]: (state, action) => {
   state.language = action.payload;
  }
});


export default languageReducer;