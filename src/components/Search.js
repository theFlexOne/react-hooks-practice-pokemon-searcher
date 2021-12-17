import React, { useState } from 'react';

function Search({ handleQueryChange, query }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={e => handleQueryChange(e.target.value)}
          value={query}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
