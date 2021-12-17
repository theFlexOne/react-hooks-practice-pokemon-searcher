import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

const url = 'http://localhost:3001/pokemon';

function PokemonCollection({ queryFilter }) {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCollection(data));
  }, []);

  const filteredCollection = collection.filter(pokemon => {
    if (pokemon.name.toLowerCase().includes(queryFilter.toLowerCase()))
      return true;
    return false;
  });

  return (
    <>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {filteredCollection.map(pokemon => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
