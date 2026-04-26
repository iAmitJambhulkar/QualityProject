import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import enquiryReducer from './slices/enquirySlice';
import servicesReducer from './slices/servicesSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    enquiry: enquiryReducer,
    services: servicesReducer,
  },
});
