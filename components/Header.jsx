import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Icon from '../assets/images/Icon.png';

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
        <Link to="login">
          <img src={Icon} alt="login" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
