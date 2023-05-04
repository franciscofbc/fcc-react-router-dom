import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const HostLayoutVanDetail = () => {
  return (
    <div>
      {/* <Outlet /> */}

      <h1>teste</h1>
      <nav>
        <NavLink
          to="pricing"
          // className={({ isActive }) => (isActive ? 'isActive' : null)}
        >
          Pricing
        </NavLink>
      </nav>
    </div>
  );
};
