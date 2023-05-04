import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
  return (
    <>
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
          to="/host/reviews"
          className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
