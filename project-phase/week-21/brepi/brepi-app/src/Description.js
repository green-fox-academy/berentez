const Description = (props) => {
  const { description, onClick } = props;
  return (
    <div className="beerTile" onClick={onClick}>
      <p className="descript">{description}</p>
    </div>
  );
};

export default Description;
