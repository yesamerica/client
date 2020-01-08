import React from "react";
import myEvents from "../../images/my_events_icon.svg";
import browseIcon from "../../images/browse_icon.svg";
import createEvent from "../../images/create_icon.svg";
import calendarIcon from "../../images/calendar.svg";
import profileIcon from "../../images/profile.svg"
const AppTray = props => {
  return (
    <div className="AppTray">
      <div className="IconWithText">
        <img src={myEvents} />
        <p>my events</p>
      </div>
      <div className="IconWithText"> 
        <img src={calendarIcon} />
        <p>calendar</p>
      </div>
      <div className="IconWithText">
        <img src={createEvent} />
        <p>create event</p>
      </div>
      <div className="IconWithText">
        <img src={browseIcon} />
        <p>browse</p>
      </div>
      <div className="IconWithText">
        <img src={profileIcon} />
        <p>profile</p>
      </div>
    </div>
  );
};

export default AppTray;
