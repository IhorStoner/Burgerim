import { createReducer } from "@reduxjs/toolkit";
import { changeLanguage } from '../actions/languageAction';

const initialState = {
  language: 'RU',
};

const languageReducer = createReducer(initialState, {
  [changeLanguage.type]: (state, action) => {
   state.language = state.language === 'RU' ? 'UKR' : 'RU';
  }
});


export default languageReducer;