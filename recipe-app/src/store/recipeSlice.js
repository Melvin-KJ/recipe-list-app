import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    allRecipes: [],
    filteredRecipes: [],
    recipeDetail: null,
    status: 'idle',
  },
  reducers: {
    setRecipes(state, action) {
      state.allRecipes = action.payload;
      state.filteredRecipes = action.payload;
    },
    filterByCuisine(state, action) {
      const cuisine = action.payload;
      state.filteredRecipes = state.allRecipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      );
    },
    setRecipeDetail(state, action) {
      state.recipeDetail = action.payload;
    },
  },
});

export const { setRecipes, filterByCuisine, setRecipeDetail } =
  recipeSlice.actions;
export default recipeSlice.reducer;
