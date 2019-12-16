import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
const Menu = props => {
  const openMenu = e => {
    e.currentTarget.classList.toggle("MenuActive");
  };
  const logout = () =>{
    localStorage.clear()
  }
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
            <Link onClick={logout} to="/">Logout</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
