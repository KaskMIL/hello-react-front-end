import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducer';

const Store = configureStore({
  reducer: {
    greet: greetingReducer,
  },
});

export default Store;