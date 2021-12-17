import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

function PokemonCard({ pokemon }) {
  console.log(pokemon);
  const [isFront, setIsFront] = useState(true);
  const { hp, id, name, sprites } = pokemon;

  const image = isFront ? sprites.front : sprites.back;

  const capitalize = name => {
    return name[0].toUpperCase() + name.slice(1);
  };

  const flipImage = () => {
    setIsFront(() => !isFront);
  };

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={image} onClick={flipImage} />
        </div>
        <div className="content">
          <div className="header">{capitalize(name)}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
