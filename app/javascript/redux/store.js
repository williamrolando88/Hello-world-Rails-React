import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice';

export const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});
