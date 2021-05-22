const BeerList = ({ beers }) => {
  return beers.map((beer) => (
    <div className="beerTile" key={beer.id}>
      <img src={`${beer.image_url}`} alt="beer" />
      <h5>{beer.name}</h5>
    </div>
  ));
};

export default BeerList;
