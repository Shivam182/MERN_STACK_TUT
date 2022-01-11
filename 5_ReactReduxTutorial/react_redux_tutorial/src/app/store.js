import { configureStore } from '@reduxjs/toolkit';

// Just imported as by name of countReducer which was actually counterSlice.reducer
import counterReducerL from '../features/counter/counterSlice'; 

export const store = configureStore({
  reducer: {
    counter: counterReducerL,
  },
});
