import React from "react";
import NotificationImage from '../../images/open_icon.svg'
import NotificationIcon from '../../images/notification_icon.svg'
const Notifications = () => {
  return (
    <section className="Notifications">
      <div className="TrayTitle">
          <img src={NotificationIcon} />
        <p>Notifications</p>
      </div>
      <div className="Notification">
        <img src={NotificationImage}/>
        <div className="NotificationsData">
            You have a new sponsorship proposal
        </div>
      </div>
    </section>
  );
};

export default Notifications;