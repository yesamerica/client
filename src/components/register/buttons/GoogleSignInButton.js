//Sign in Canvas
import React from "react";
import { tsPropertySignature } from "@babel/types";

const GoogleSignInButton = (props) => {
  console.log("googleCalled");
  //Auth and Auth Success can be thought of like Fire and Air
  const auth = () => {
    window.open(
      "https://yesamerica-api.herokuapp.com/googleAuth",
      "Sign In With googlehub ;)",
      "width=400,height=500"
    );
    window.addEventListener(
      "message",
      response => {
        authSuccess(response.data); // e.data hold the message
      },
      false
    );
  };

  const authSuccess = userObject => {
    const data = JSON.parse(userObject)
    localStorage.setItem("token", data.token);
    props.history.push('/new-account')
  };

  return (
    <div className="authButton">
      <i className="fab fa-google-plus-g"></i>
      <button className="google_login" onClick={auth}>
        Google
      </button>
    </div>
  );
};

export default GoogleSignInButton;
