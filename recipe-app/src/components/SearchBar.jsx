import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCuisine } from '../store/recipeSlice';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filterByCuisine(searchTerm));
  };

  return (
    <div className="mb-4">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search by cuisine"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button className='ms-2' variant="secondary" onClick={() => setSearchTerm('')}>
          Reset
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
