import { useState } from 'react';
import BeerList from './BeerList';
import useFetch from './useFetch';

const Main = () => {
  const [page, setPage] = useState(1);
  const { data: beers, isPending, error } = useFetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`);
  return (
    <div className="display">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {beers && <BeerList beers={beers} />}
    </div>
  );
};

export default Main;
