import { useState } from 'react';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

import BeerList from './BeerList';
import UseFetch from './useFetch';

const Main = () => {
  const [currentPage, setPage] = useState(1);

  const { data: beers, isPending, error } = UseFetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=6`);

  const handleClick = (page) => {
    setPage(page);
  };

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
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} defaultPageSize={10} total={200} onChange={handleClick} />
      </div>
    </>
  );
};

export default Main;
