import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const RecipeList = ({ currentPage, recipesPerPage }) => {
  const { filteredRecipes } = useSelector((state) => state.recipes);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  return (
    <Row className="g-3">
      {currentRecipes.map((recipe) => (
        <Col key={recipe.id} md={6} lg={4}>
          <Card className="h-100">
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>
                Cuisine: <strong>{recipe.cuisine}</strong>
              </Card.Text>
              <Card.Text>
                Rating: {recipe.rating} ({recipe.reviewCount} reviews)
              </Card.Text>
              <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">
                View Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RecipeList;
