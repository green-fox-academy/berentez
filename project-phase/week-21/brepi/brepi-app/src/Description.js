const Description = (props) => {
  const { description, onClick } = props;
  return (
    <div className="beerTile" onClick={onClick} style={{ backgroundColor: 'rgb(125, 234, 202' }}>
      <p className="descript">{description}</p>
    </div>
  );
};

export default Description;
