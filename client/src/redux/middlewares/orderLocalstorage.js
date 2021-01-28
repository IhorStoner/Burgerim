import { changeCountChicken,changeCountTurkey,changeCountBeef,changeCountPork } from '../actions/orderAction'

export const orderLocalstorage = store => next => action => {

  if ([changeCountChicken.type, changeCountTurkey.type,changeCountBeef.type,changeCountPork.type].includes(action.type)) {
    next(action);
    const nextState = store.getState();
    try {
      localStorage.setItem('burgerimCart', JSON.stringify(nextState.order));
    } catch (e) {
      console.log('ERROR SAVING STATE')
    }
    return;
  }
  return next(action);
};