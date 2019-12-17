//Sign in Landing
import React from "react";
import { Route } from "react-router-dom";
import GoogleSignInButton from "./buttons/GoogleSignInButton";
import FacebookSignInButton from "./buttons/FacebookSignInButton";
import NoAccountButton from "./buttons/NoAccountButton";
import logoWhite from "../../images/logo_wh.svg";
import signIn from "../../images/signin_button.svg";
import "./signIn.scss";

const SignInLanding = props => {
  return (
    <div className="SignInLanding">
      <div className="signInLandingTop">
        <img className="logo" src={logoWhite} alt="Yes America" />
      </div>
      <div className="signInLandingBottom">
        <img
          className="signIn"
          onClick={() => props.history.push("/signIn")}
          src={signIn}
          alt="Sign In to Yes america blue button with icon"
        />
        <FacebookSignInButton {...props} />
        <GoogleSignInButton {...props} />
        <NoAccountButton {...props} />
      </div>
    </div>
  );
};

export default SignInLanding;
