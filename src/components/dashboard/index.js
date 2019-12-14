import React from "react";
import logo from "../../images/logo_plain.svg";
import "./dashboard.scss";
import Events from "./Events";
import Notifications from "./Notifications";
import LocalEvents from "./LocalEvents";
import AppTray from "./AppTray";
import Menu from '../menu'
const DashBoard = props => {
  
  return (
    <div className="DashBoard">
      <header>
        <img src={logo} />
        <Menu />
      </header>
      <div className="DashBoardContentContainer">
        <Notifications />
        <Events />
        <LocalEvents />
        <AppTray />
      </div>
    </div>
  );
};

export default DashBoard;
