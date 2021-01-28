import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import { orderLocalstorage } from './middlewares/orderLocalstorage';

export default () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat([
      orderLocalstorage
    ]),
    devTools: true,
  })
};