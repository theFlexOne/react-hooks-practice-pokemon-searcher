import React, { useState } from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

function PokemonPage() {
  const [query, setQuery] = useState('');

  const handleQueryChange = query => {
    setQuery(query);
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleQueryChange={handleQueryChange} query={query} />
      <br />
      <PokemonCollection queryFilter={query} />
    </Container>
  );
}

export default PokemonPage;
