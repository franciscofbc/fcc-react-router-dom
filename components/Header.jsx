import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  // const style = {
  //   fontWeight: 'bold',
  //   textDecoration: 'underline',
  //   color: '#161616',
  // };

  return (
    <header className="container">
      <Link to=".">
        <img src={logo} alt="VANLIFE" />
      </Link>
      <nav>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
