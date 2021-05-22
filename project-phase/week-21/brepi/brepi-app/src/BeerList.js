import { useState } from 'react';
import Description from './Description';
import Image from './Image';

const BeerList = ({ beers }) => {
  const [description, setDescription] = useState(false);

  const handleClick = (beer, e) => {
    {
      description ? setDescription(false) : setDescription(true);
    }

    console.log(description);
  };

  return beers.map((beer) => (
    <div className="beerTile" key={beer.id} onClick={(e) => handleClick(beer, e)}>
      {description ? (
        <Description description={`${beer.description}`} />
      ) : (
        <Image image_url={`${beer.image_url}`} name={`${beer.name}`} />
      )}
    </div>
  ));
};

export default BeerList;

{
  /* <div className="beerTile">
          <img src={`${beer.image_url}`} alt="beer" /> <h5>{beer.name}</h5>{' '}
        </div> */
}
