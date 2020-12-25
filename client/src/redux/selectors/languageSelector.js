import { createSelector } from '@reduxjs/toolkit'

export const getLanguage = createSelector(
  state =>  state.language.language,
  language => language
);