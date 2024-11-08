import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleSortByChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleSearch = (event) => {
    searchYelp(term, location, sortBy);
    event.preventDefault();
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {Object.keys(sortByOptions).map(option => (
            <li
              key={option}
              className={sortBy === sortByOptions[option] ? 'active' : ''}
              onClick={() => handleSortByChange(sortByOptions[option])}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={(e) => setTerm(e.target.value)} />
        <input placeholder="Where?" onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
