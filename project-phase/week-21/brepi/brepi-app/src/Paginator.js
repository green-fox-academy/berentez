const Paginator = (props) => {
  const { page } = props;

  return (
    <div className="paginator">
      <a href="">back</a>
      <a href="">1</a>
      <a href="">2</a>
      <a href="">forward</a>
    </div>
  );
};

export default Paginator;
