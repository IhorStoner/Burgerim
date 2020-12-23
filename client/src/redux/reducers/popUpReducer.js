import { createReducer } from "@reduxjs/toolkit";
import { openPopup} from '../actions/popUpAction';

const initialState = {
  popupOpen: false,
};

const popUpReducer = createReducer(initialState, {
  [openPopup.type]: (state, action) => {
   state.popupOpen = state.popupOpen ? false : true;
  }
});


export default popUpReducer;