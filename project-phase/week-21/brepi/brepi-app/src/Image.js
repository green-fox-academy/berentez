const Image = (props) => {
  const handleClick = (e) => {
    console.log(props.name);
  };

  return (
    <div className="beerTile">
      <img src={`${props.image_url}`} alt="beer" onClick={props.handleClick} />
      <h5>{props.name}</h5>
    </div>
  );
};

export default Image;
