import { configureStore } from '@reduxjs/toolkit';
import FormSlice from '../FormSlice';
import ErrorSlice from '../ErrorSlice';
import CountriesSlice from '../CountriesSlice';

export const store = configureStore({
  reducer: {
    form: FormSlice,
    error: ErrorSlice,
    countries: CountriesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
