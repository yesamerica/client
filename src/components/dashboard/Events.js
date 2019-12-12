import React from "react";
import eventImage from '../../images/sample_event.svg'
import eventIcon from '../../images/current_events_icon.svg'
const Events = () => {
  return (
    <section className="Events">
      <div className="TrayTitle">
          <img src={eventIcon} />
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

export default Events;
