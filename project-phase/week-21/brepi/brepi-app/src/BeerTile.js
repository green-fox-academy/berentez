import { useState } from 'react';

import Description from './Description';
import Image from './Image';

const BeerTile = (props) => {
  const { beer } = props;

  let [descriptionON, setDesc] = useState(false);

  const toggleClick = () => {
    descriptionON ? setDesc(false) : setDesc(true);
  };

  return (
    <div key={beer.id}>
      {descriptionON ? (
        <Description description={beer.description} onClick={() => toggleClick()} />
      ) : (
        <Image image_url={beer.image_url} name={beer.name} onClick={() => toggleClick()} />
      )}
    </div>
  );
};

export default BeerTile;
