import { useState } from 'react';

import BeerTile from './BeerTile';

const BeerList = (props) => {
  const { beers } = props;

  return beers.map((beer) => (
    <div key={beer.id}>
      <BeerTile beer={beer} />
    </div>
  ));
};
export default BeerList;
