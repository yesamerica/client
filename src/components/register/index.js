//Sign in Canvas
import React from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import FacebookSignInButton from "./FacebookSignInButton";
import NoAccountButton from "./NoAccountButton";
import logoWhite from '../../images/logo_wh.svg'
import signIn from '../../images/signin_button.svg'
import "./signIn.scss";
import NoAccount from "./NoAccount";

const SignInCanvas = (props) => {
  return (
    <div className="SignInCanvas">
      <img className="logo" src={logoWhite} alt="Yes America" />
      <img className="signIn" onClick={()=>props.history.push('/signIn')} src={signIn} alt="Sign In to Yes america blue button with icon" />
      <FacebookSignInButton />
      <GoogleSignInButton />
      <NoAccountButton {...props}/>
    </div>
  );
};

export default SignInCanvas;
