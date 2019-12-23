//Sign in Canvas
import React from "react";
import { tsPropertySignature } from "@babel/types";

const LocalSignInButton = props => {
  
  return (
    <button className="authButton LocalSignInButton" onClick={() => props.history.push("/signIn")}>
      <i className="fas fa-sign-in-alt"></i> <span>Sign in with my account</span>
    </button>
  );
};

export default LocalSignInButton;
