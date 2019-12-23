//Sign in Landing
import React from "react";
import GoogleSignInButton from "./buttons/GoogleSignInButton";
import FacebookSignInButton from "./buttons/FacebookSignInButton";
import NoAccountButton from "./buttons/NoAccountButton";
import logoWhite from "../../images/logo_wh.svg";
import "./signIn.scss";
import LocalSignInButton from "./buttons/LocalSignInButton";

const SignInLanding = props => {
  return (
    <div className="structuredPage">
      <div className="pageTitle">
        <img src={logoWhite} alt="Yes America" />
      </div>
      <div className="pageContent">
        <LocalSignInButton {...props} />
        <FacebookSignInButton {...props} />
        <GoogleSignInButton {...props} />
        <NoAccountButton {...props} />
      </div>
    </div>
  );
};

export default SignInLanding;
