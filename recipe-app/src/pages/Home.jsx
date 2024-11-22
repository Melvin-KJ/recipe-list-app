import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/recipeThunks';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 5;

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <Container className="my-4">
      {/* Title */}
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Recipe Finder</h1>
        </Col>
      </Row>

      {/* Search Bar */}
      <Row className="mb-4">
        <Col>
          <SearchBar />
        </Col>
      </Row>

      {/* Recipe List */}
      <Row>
        <Col>
          <RecipeList
            currentPage={currentPage}
            recipesPerPage={recipesPerPage}
          />
        </Col>
      </Row>

      {/* Pagination */}
      <Row className="mt-4">
        <Col className="d-flex justify-content-between">
          <Button
            variant="primary"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
