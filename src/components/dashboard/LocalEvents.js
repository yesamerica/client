import React from "react";
import eventImage from '../../images/sample_event.svg'
import browseIcon from '../../images/browse_icon_sm.svg'
const LocalEvents = () => {
  return (
    <section className="Events">
      <div className="TrayTitle">
          <img src={browseIcon} />
        <p>My current events</p>
      </div>
      <div className="Event">
        <img src={eventImage}/>
        <div className="EventData">
          <p>Date: </p>
          <p>Event: </p>
          <p>Provider: </p>
          <p>Sponsor: </p>
        </div>
      </div>
    </section>
  );
};

export default LocalEvents;
