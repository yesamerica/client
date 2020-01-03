//Sign in Landing
import React, { useState } from "react";
import GoogleSignInButton from "./buttons/GoogleSignInButton";
import FacebookSignInButton from "./buttons/FacebookSignInButton";
import NoAccountButton from "./buttons/NoAccountButton";

import "./signIn.scss";
import LocalSignInButton from "./buttons/LocalSignInButton";

//Images
import logoWhite from "../../images/logo_wh.svg";
import companyIcon from "../../images/company_icon.svg";
import individualIcon from "../../images/individual_icon.svg";
import providerIcon from "../../images/provider_icon.svg";
import sponsorIcon from "../../images/sponsor_icon.svg";
import SignInButton from "./buttons/SignInButton";
const SignInLanding = props => {
  const [active, setActive] = useState();
  console.log(active);
  const actType = e => {
    console.log(e.currentTarget.id);
    props.history.push(`/new-account/${e.currentTarget.id}`);
  };
  return (
    <div className="structuredPage newAccount">
      <div className="pageTitle">
        <img src={logoWhite} alt="Yes America" />
      </div>
      <div className="pageContent">
        <div id="company" className="selectUserRole" onClick={actType}>
          <img src={companyIcon} alt="Building Icon" />
          <h2>I am a company looking to set up events for employees</h2>
        </div>
        <div id="provider" className="selectUserRole" onClick={actType}>
          <img src={providerIcon} alt="Microphone Icon" />
          <h2>
            I am a speaker or service provider looking to get out in my
            community
          </h2>
        </div>
        <div id="individual" className="selectUserRole" onClick={actType}>
          <img src={individualIcon} alt="User Icon" />
          <h2>I am an individual or group member looking to set up an event</h2>
        </div>
        <div id="sponsor" className="selectUserRole" onClick={actType}>
          <img src={sponsorIcon} alt="Gift Icon" />
          <h2>I am a sponsor who wants to support my community</h2>
        </div>
        { active && <div
          onClick={e => {
            if( e.target.classList[0] !== 'SignInDrawer') return;
            setActive(!active);
          }}
          className={`SignInDrawer ${active && "active"}`}
        >
          <div className="SignInButtonWrapper">
            <LocalSignInButton {...props} />
            <FacebookSignInButton {...props} />
            <GoogleSignInButton {...props} />
            <NoAccountButton {...props} />
          </div>
        </div>}
      </div>
      <SignInButton setActive={setActive} />
    </div>
  );
};

export default SignInLanding;
