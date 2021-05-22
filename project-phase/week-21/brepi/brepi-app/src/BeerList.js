import { useState } from 'react';

import Description from './Description';
import Image from './Image';

const BeerList = ({ beers }) => {
  const [descriptionON, setDesc] = useState(null);

  const handleClick = () => {
    console.log('fut');
  };

  return beers.map((beer) => (
    <div key={beer.id}>
      {descriptionON ? (
        <Description description={`${beer.description}`} />
      ) : (
        <Image image_url={`${beer.image_url}`} name={`${beer.name}`} onClick={handleClick} />
      )}
    </div>
  ));
};
export default BeerList;
