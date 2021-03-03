import { createReducer } from "@reduxjs/toolkit";
import { changeCountChicken, changeCountTurkey, changeCountBeef, changeCountPork, clearOrder } from '../actions/orderAction';

let initialState = {};

try {
  initialState = JSON.parse(localStorage.getItem('burgerim')) || {
    chicken: 0,
    chickenOnePrice: 30,
    chickenPrice: 0,
    turkey: 0,
    turkeyOnePrice: 30,
    turkeyPrice: 0,
    beef: 0,
    beefOnePrice: 30,
    beefPrice: 0,
    pork: 0,
    porkOnePrice: 30,
    porkPrice: 0,
    totalPrice: 0,
  }
} catch (e) {
  console.log('Local storage is empty')
}

const orderReducer = createReducer(initialState, {
  [changeCountChicken.type]: (state, action) => {
    state.chicken = action.payload;
    state.chickenPrice = action.payload * state.chickenOnePrice
    state.totalPrice = state.chickenPrice + state.turkeyPrice + state.beefPrice + state.porkPrice
  },
  [changeCountTurkey.type]: (state, action) => {
    state.turkey = action.payload;
    state.turkeyPrice = action.payload * state.turkeyOnePrice
    state.totalPrice = state.chickenPrice + state.turkeyPrice + state.beefPrice + state.porkPrice
  },
  [changeCountBeef.type]: (state, action) => {
    state.beef = action.payload;
    state.beefPrice = action.payload * state.beefOnePrice
    state.totalPrice = state.chickenPrice + state.turkeyPrice + state.beefPrice + state.porkPrice
  },
  [changeCountPork.type]: (state, action) => {
    state.pork = action.payload;
    state.porkPrice = action.payload * state.porkOnePrice
    state.totalPrice = state.chickenPrice + state.turkeyPrice + state.beefPrice + state.porkPrice
  },
  [clearOrder.type]: (state, action) => {
    state.chicken = 0;
    state.chickenPrice = 0;
    state.turkey = 0;
    state.turkeyPrice = 0;
    state.beef = 0;
    state.beefPrice = 0;
    state.pork = 0;
    state.porkPrice = 0;
    state.totalPrice = 0;
  },
});


export default orderReducer;