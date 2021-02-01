import { createReducer } from "@reduxjs/toolkit";
import { openPopup,orderSuccess} from '../actions/popUpAction';

const initialState = {
  popupOpen: false,
  orderSuccess: false,
};

const popUpReducer = createReducer(initialState, {
  [openPopup.type]: (state, action) => {
   state.popupOpen = state.popupOpen ? false : true;
  },
  [orderSuccess.type]: (state,action) => {
    state.orderSuccess = action.payload
  }
});


export default popUpReducer;