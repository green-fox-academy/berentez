const Image = (props) => {
  console.log(props);
  return (
    <div className="beerTile">
      <img src={`${props.image_url}`} alt="beer" />
      <h5>{props.name}</h5>
    </div>
  );
};

export default Image;
