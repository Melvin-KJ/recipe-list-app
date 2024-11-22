import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../store/recipeSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
