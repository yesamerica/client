//Sign in Canvas
import React from "react";
import { Route } from "react-router-dom";
import SignInLanding from './SignInLanding';
import LocalSignupForm from './LocalSignInForm'
import LocalRegisterForm from './LocalRegisterForm'
import "./signIn.scss";

const SignInCanvas = props => {
  return (
    <div className="SignInCanvas">
    <Route exact path="/" component={SignInLanding}/>
    <Route exact path="/register" component={LocalRegisterForm} />
    <Route exact path="/signup" component={LocalSignupForm} />
    <Route path="/new-account" />
    </div>
  );
};

export default SignInCanvas;
