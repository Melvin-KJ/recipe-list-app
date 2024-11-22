import { setRecipes, setRecipeDetail } from './recipeSlice';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/recipes';

export const fetchRecipes = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(setRecipes(response.data.recipes));
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
  }
};

export const fetchRecipeDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch(setRecipeDetail(response.data));
  } catch (error) {
    console.error('Failed to fetch recipe detail:', error);
  }
};
