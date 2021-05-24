const Image = (props) => {
  const { image_url, name, onClick } = props;

  return (
    <div className="beerTile" onClick={onClick}>
      <img src={`${image_url}`} alt="beer" />
      <h5>{name}</h5>
    </div>
  );
};

export default Image;
