import { useState } from 'react';

import BeerTile from './BeerTile';

const BeerList = (props) => {
  const { beers } = props;
  const [descriptionON, setDesc] = useState(undefined);

  return beers.map((beer) => (
    <div key={beer.id}>
      <BeerTile id={beer.id} beer={beer} descriptionON={descriptionON} setDesc={setDesc} />
    </div>
  ));
};
export default BeerList;
