//Sign in Canvas
import React from "react";
import { Route, Switch } from "react-router-dom";
import SignInLanding from "./SignInLanding";
import LocalSignupForm from "./LocalSignInForm";
import LocalRegisterForm from "./LocalRegisterForm";
import Onboarding from "./onboarding";
import "./signIn.scss";

const SignInCanvas = props => {
  return (
    <div className="SignInCanvas">
      <Switch>
        <Route exact path="/" component={SignInLanding} />
        <Route exact path="/register" component={LocalRegisterForm} />
        <Route exact path="/signup" component={LocalSignupForm} />
        <Route match path="/new-account" component={Onboarding} />
      </Switch>
    </div>
  );
};

export default SignInCanvas;
