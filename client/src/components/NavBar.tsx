import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full h-7vh">
      <Link to="/" className="mx-2 text-white">
        Home
      </Link>
      <Link to="/users" className="mx-2 text-white">
        Users
      </Link>
      <Link to="/register" className="mx-2 text-white">
        Register
      </Link>
      <Link to="/login" className="mx-2 text-white">
        Login
      </Link>
      <Link to="/login2" className="mx-2 text-white">
        Login2
      </Link>
    </nav>
  );
};

export default Navbar;
