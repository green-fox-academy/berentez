import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home page </Link>
        <Link to="/simple/states"> With states</Link>
      </div>
    </nav>
  );
};

export default Navbar;
