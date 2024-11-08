import React, { useState } from 'react';

function SearchBar(props) {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  
  const handleSearch = () => {
    props.searchYelp(term, location, props.sortBy);
  };
  
  return (
    <div className="SearchBar">
      <input placeholder="Search Businesses" value={term} onChange={handleTermChange} />
      <input placeholder="Where?" value={location} onChange={handleLocationChange} />
      <button onClick={handleSearch}>Let's Go</button>
    </div>
  );
}

export default SearchBar;
