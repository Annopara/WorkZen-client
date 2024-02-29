import React from "react";
import "./Navbar.scss";
import { AccountCircle, Workspaces } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Hardcoded user info for the login page
  const loginUserInfo = {
    name: "Guest",
  };

  // Dummy user info for the home page
  const homeUserInfo = {
    name: "Ann Charles",
    role: "Administrator",
  };

  // Determine which user info to display based on the current location
  const userInfo =
    location.pathname === "/" || location.pathname === "/logout"
      ? loginUserInfo
      : homeUserInfo;

  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar__logo'>
        <div className='navbar__img'>
          <Workspaces className='navbar__dot' />
        </div>
        WorkZen
      </NavLink>
      <section className='navbar__profile'>
        <div className='navbar__avatar'>
          <AccountCircle />
        </div>
        <div className='navbar__info'>
          <span className='navbar__user'>{userInfo.name}</span>
          <span className='navbar__role'>{userInfo.role}</span>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
