import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
  return (
    <div className="container">
      <nav>
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
