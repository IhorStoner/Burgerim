import { createSelector } from '@reduxjs/toolkit'

export const isOpenPopUp = createSelector(
  state =>  state.popUp.popupOpen,
  isOpen => isOpen
);


export const getOrderSuccess = createSelector(
  state =>  state.popUp.orderSuccess,
  isSuccess => isSuccess
);