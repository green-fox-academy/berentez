const BeerList = (props) => {
  console.log(props);
  return props.map((beer) => (
    <div className="beerTile" key={beer.id}>
      <img src={`${beer.image_url}`} alt="beer" />
    </div>
  ));
};

export default BeerList;
