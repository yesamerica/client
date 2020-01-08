import React, { useState, useEffect } from "react";
import logo from "../../images/logo_plain.svg";
import "./dashboard.scss";
import Events from "./Events";
import Notifications from "./Notifications";
import LocalEvents from "./LocalEvents";
import AppTray from "./AppTray";
import Menu from "../menu";
import Profile from "./Profile";
import { axiosWithAuth } from "../../util/axiosWithAuth";

const data = {
  notifications: [
    {
      title: "Please verify your email",
      message: "",
      linkText: "",
      linkLocation: ""
    },
    {
      title: "You don't have any events",
      message: "",
      linkText: "",
      linkLocation: "/onboarding/company"
    },
    {
      title: "You haven't created any events",
      message: "",
      linkText: "",
      linkLocation: ""
    }
  ]
};

const DashBoard = props => {
  console.log("DASHPROPS",props)
  const [user, setUser] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get("/user")
      .then(res => console.log(res))
      .catch(err => console.log('err',err));
  }, []);

  console.log("user", user);
  return (
    <div className="DashBoard">
      <header>
        <img src={logo} alt="Yes americas Logo" />
        <Menu />
      </header>
      <div className="DashBoardContentContainer">
        {data.notifications.map((notification,i )=> {
          const { title, message, linkText, linkLocation } = notification;
          return <Notifications title={title} key={i} linkLocation={linkLocation} {...props} />;
        })}
      </div>
      <AppTray />
    </div>
  );
};

export default DashBoard;
