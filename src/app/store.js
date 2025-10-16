import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/eventsSlice';
import registrationsReducer from '../features/registrationsSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    registrations: registrationsReducer
  }
});
