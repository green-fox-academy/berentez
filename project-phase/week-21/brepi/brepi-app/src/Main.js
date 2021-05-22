import BeerList from './BeerList';
import useFetch from './useFetch';

const Main = () => {
  const { data: beers, isPending, error } = useFetch('https://api.punkapi.com/v2/beers?page=1&per_page=6');
  return (
    <div className="display">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {beers && <BeerList beers={beers} />}
    </div>
  );
};

export default Main;
