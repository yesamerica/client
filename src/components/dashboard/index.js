import React, { useState, useEffect } from "react";
import logo from "../../images/logo_plain.svg";
import "./dashboard.scss";
import Events from "./Events";
import Notifications from "./Notifications";
import LocalEvents from "./LocalEvents";
import AppTray from "./AppTray";
import Menu from "../menu";
import Profile from './Profile'
import { axiosWithAuth } from "../../util/axiosWithAuth";
const DashBoard = props => {
  const [user, setUser] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get("/user")
      .then(res => setUser(res.data))
      .catch(err => {
        console.log('no user')
        localStorage.clear()
      });
  }, []);

  console.log('user',user)
  return (
    <div className="DashBoard">
      <header>
        <img src={logo} alt="Yes americas Logo"/>
        <Menu />
      </header>
      <div className="DashBoardContentContainer">
        <Profile user={user}/>
        <Notifications />
        <Events />
        <LocalEvents />
      </div>
    </div>
  );
};

export default DashBoard;
