import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './slice'

export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});