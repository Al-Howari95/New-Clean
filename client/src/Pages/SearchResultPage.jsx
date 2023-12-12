import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultPage = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li> /* Adjust based on your API response */
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResultPage;
