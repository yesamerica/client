import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
const Menu = () => {
  const openMenu = e => {
    e.currentTarget.classList.toggle("MenuActive");
  };
  return (
    <>
      <div className="Menu" onClick={openMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="MenuContainer">
          <nav>
            <Link to="/yo">My Account</Link>
            <Link to="/yo">My events</Link>
            <Link to="/yo">Book an event</Link>
            <Link to="/yo">Browse events</Link>
            <Link to="/yo">Contact</Link>
            <Link to="/yo">Logout</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
