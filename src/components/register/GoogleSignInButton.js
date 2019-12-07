//Sign in Canvas
import React from "react";

const GoogleSignInButton = () => {
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
    console.log(JSON.parse(userObject));
  };

  return (
    <div className="authButton">
      <i class="fab fa-google-plus-g"></i>
      <button className="google_login" onClick={auth}>
        Google
      </button>
    </div>
  );
};

export default GoogleSignInButton;
