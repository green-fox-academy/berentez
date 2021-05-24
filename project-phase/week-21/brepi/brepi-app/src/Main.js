import { useState } from 'react';

import BeerList from './BeerList';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import useFetch from './useFetch';

const Main = () => {
  const [currentPage, setPage] = useState(1);
  // const [beerPerPage, setBeerNum] = useState(6);
  const { data: beers, isPending, error } = useFetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=6`);
  // const { data: beers, isPending, error } = useFetch(`https://api.punkapi.com/v2/beers`);

  const clickForward = () => {
    setPage((currentPage += 1));
    console.log(currentPage);
  };

  const clickBack = () => {
    setPage((currentPage -= 1));
  };

  // const indexOfLastBeer = currentPage * beerPerPage;
  // const indexOfFirstBeer = indexOfLastBeer - beerPerPage;

  // const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

  return (
    <>
      <div className="display">
        {error && <div>{error} </div>}
        {isPending && (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
        {beers && <BeerList beers={beers} />}
        {/* </div>
      <div className="paginator">
        <a src="#" onClick={() => clickBack()}>
          &laquo;
        </a>
        <button>1</button>
        <button>2</button>
        <a src="#" onClick={() => clickForward()}>
          &raquo;
        </a> */}
        <Pagination />
      </div>
    </>
  );
};

export default Main;
