import { useState } from 'react';

import Description from './Description';
import Image from './Image';

const BeerTile = (props) => {
  const { beer, descriptionON, setDesc, id } = props;

  const toggleClick = () => {
    setDesc(id);
  };

  const handleClick = () => {
    setDesc(undefined);
  };

  return (
    <div key={id}>
      {descriptionON === id ? (
        <Description description={beer.description} onClick={() => handleClick()} />
      ) : (
        <Image image_url={beer.image_url} name={beer.name} onClick={() => toggleClick()} />
      )}
    </div>
  );
};

export default BeerTile;
