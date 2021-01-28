import { createSelector } from '@reduxjs/toolkit'

export const getOrder = createSelector(
  state =>  state.order,
  order => order
);