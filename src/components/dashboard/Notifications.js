import React from "react";
import NotificationIcon from "../../images/notification_icon.svg";
const Notifications = props => {
  const title = props.title || "Notifications";
  const message = props.message || "Some Message";
  const linkText = props.linkText || "Some Link";
  const linkLocation = props.linkLocation || "/dashboard"
  return (
    <section className="Notification">
      <div className="TrayTitle">
        <h2>{title}</h2>
      </div>
      <div className="TrayBody">
        <img src={NotificationIcon} />
        <p>{message}</p>
      </div>
      <div className="TrayFooter">
        <p onClick={()=>props.history.push(linkLocation)}>{linkText}</p>
      </div>
    </section>
  );
};

export default Notifications;
