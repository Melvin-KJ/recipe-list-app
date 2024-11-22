import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap';
import { fetchRecipeDetail } from '../store/recipeThunks'; // Assume this action exists

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipeDetail } = useSelector((state) => state.recipes);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchRecipeDetail(id)); // Assuming your Redux action is set up for this
      setLoading(false);
    };
    fetchData();
  }, [id, dispatch]);

  if (loading) return <div>Loading...</div>;

  if (!recipeDetail) return <div>Recipe not found!</div>;

  return (
    <Container className="my-4">
      <Card>
        <Card.Img variant="top" src={recipeDetail.image} />
        <Card.Body>
          <Card.Title>{recipeDetail.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cuisine: {recipeDetail.cuisine} | Difficulty:{' '}
            {recipeDetail.difficulty}
          </Card.Subtitle>
          <Card.Text>
            <strong>Ingredients:</strong>
            <ul>
              {recipeDetail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text>
          <Card.Text>
            <strong>Instructions:</strong>
            <ol>
              {recipeDetail.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </Card.Text>
          <Card.Text>
            Prep Time: {recipeDetail.prepTimeMinutes} minutes | Cook Time:{' '}
            {recipeDetail.cookTimeMinutes} minutes
          </Card.Text>
          <Card.Text>
            Servings: {recipeDetail.servings} | Calories per Serving:{' '}
            {recipeDetail.caloriesPerServing}
          </Card.Text>
          <Button variant="secondary" onClick={() => window.history.back()}>
            Back to Recipe List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeDetail;
