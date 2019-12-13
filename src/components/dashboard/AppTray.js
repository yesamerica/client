import React from "react";
import myEvents from "../../images/my_events_icon.svg";
import bookEvent from "../../images/book_icon.svg";
import browseIcon from "../../images/browse_icon.svg";
import createEvent from "../../images/create_icon.svg";
const AppTray = props => {
  return (
    <div className="AppTray">
      <img src={myEvents} />
      <img src={bookEvent} />
      <img src={browseIcon} />
      <img src={createEvent} />
    </div>
  );
};

export default AppTray;
