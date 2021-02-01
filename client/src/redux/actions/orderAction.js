import { createAction } from "@reduxjs/toolkit";

export const changeCountChicken = createAction('CHANGE_CHICKEN');

export const changeCountTurkey = createAction('CHANGE_TURKEY');

export const changeCountBeef = createAction('CHANGE_BEEF');

export const changeCountPork = createAction('CHANGE_PORK');

export const clearOrder = createAction('CLEAR_ORDER');