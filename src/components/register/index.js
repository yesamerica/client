//Sign in Canvas
import React from "react";
import GithubSignInButton from "./GithubSignInButton";
import GoogleSignInButton from "./GoogleSignInButton";
import FacebookSignInButton from "./FacebookSignInButton";
import LocalSignUpForm from "./LocalSignUpForm";
import "./signIn.scss";
const SignInCanvas = () => {
  console.log("herehere");
  return (
    <div className="SignInCanvas">
      {/* <GithubSignInButton/><br /> */}
      <FacebookSignInButton />
      <GoogleSignInButton />
      <p>Don't Have an Account?</p>
      {/* <LocalSignUpForm /> */}
    </div>
  );
};

export default SignInCanvas;
