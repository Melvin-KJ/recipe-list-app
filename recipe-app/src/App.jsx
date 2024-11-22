import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
