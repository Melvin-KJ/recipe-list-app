import React from 'react';
import RecipeDetail from '../components/RecipeDetail';
import { Container } from 'react-bootstrap';

const RecipePage = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center">Recipe Details</h2>
      <RecipeDetail />
    </Container>
  );
};

export default RecipePage;
