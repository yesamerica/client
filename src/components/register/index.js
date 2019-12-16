//Sign in Canvas
import React from "react";
import GoogleSignInButton from "./buttons/GoogleSignInButton";
import FacebookSignInButton from "./buttons/FacebookSignInButton";
import NoAccountButton from "./buttons/NoAccountButton";
import logoWhite from '../../images/logo_wh.svg'
import signIn from '../../images/signin_button.svg'
import "./signIn.scss";


const SignInCanvas = (props) => {
  localStorage.getItem('token') && props.history.push('/dashboard')
  return (
    <div className="SignInCanvas">
      <img className="logo" src={logoWhite} alt="Yes America" />
      <img className="signIn" onClick={()=>props.history.push('/signIn')} src={signIn} alt="Sign In to Yes america blue button with icon" />
      <FacebookSignInButton {...props}/>
      <GoogleSignInButton {...props}/>
      <NoAccountButton {...props}/>
    </div>
  );
};

export default SignInCanvas;
