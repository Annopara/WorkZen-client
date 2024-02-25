import React from "react";
import "./Navbar.scss";
import { AccountCircle, Workspaces } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <span className='navbar__user'>Ann Charles</span>
          <span className='navbar__role'>Administrator</span>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
