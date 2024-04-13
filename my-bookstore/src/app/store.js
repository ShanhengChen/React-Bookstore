
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../store/booksSlice.ts';

export const store = configureStore({
  reducer: {
    books: booksReducer
  }
});

export default store;
