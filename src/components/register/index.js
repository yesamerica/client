//Sign in Canvas
import React from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import FacebookSignInButton from "./FacebookSignInButton";
<<<<<<< HEAD
import NoAccountButton from "./NoAccountButton";
import logoWhite from '../../images/logo_wh.svg'
import signIn from '../../images/signin_button.svg'
import "./signIn.scss";
import NoAccount from "./NoAccount";

=======
import LocalSignUpForm from "./LocalSignUpForm";
import logoWhite from '../../images/logo_wh.svg'
import signIn from '../../images/signin_button.svg'
import "./signIn.scss";
>>>>>>> 674ceb65bb76ceaebe51e91c537bf49790a56c84
const SignInCanvas = (props) => {
  return (
    <div className="SignInCanvas">
      <img className="logo" src={logoWhite} alt="Yes America" />
      <img className="signIn" onClick={()=>props.history.push('/signIn')} src={signIn} alt="Sign In to Yes america blue button with icon" />
      <FacebookSignInButton />
      <GoogleSignInButton />
<<<<<<< HEAD
      <NoAccountButton {...props}/>
=======
      <p>Don't Have an Account?</p>
>>>>>>> 674ceb65bb76ceaebe51e91c537bf49790a56c84
    </div>
  );
};

export default SignInCanvas;
