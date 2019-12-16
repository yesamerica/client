import React from "react";
import ProfileImage from "../../images/profile_icon.svg";
import NotificationIcon from "../../images/notification_icon.svg";
const Profile = props => {
  return (
    <section className="Profile">
      <img src={ProfileImage} />

      <div className="ProfileData">
        <p>{props.user && props.user.email}</p>
      </div>
    </section>
  );
};

export default Profile;
