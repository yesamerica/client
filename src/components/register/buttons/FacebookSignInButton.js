//Sign in Canvas
import React from "react";

const FacebookSignInButton = (props) => {
  console.log("called");
  //You will notice the functions auth and authSuccess in each SignInButton, Maybe abstract out.
  const auth = () => {
    window.open(
      "https://yesamerica-api.herokuapp.com/facebookAuth",
      "Sign In With Facebook ;)",
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
    const data = JSON.parse(userObject);
    console.log(data)
    localStorage.setItem("token", data.token);
    data && props.history.push("/dashboard");
  };

  return (
    <button className="authButton fb_login" onClick={auth}>
      <i className="fab fa-facebook-f"></i>
      <span> Facebook</span>
    </button>
  );
};

export default FacebookSignInButton;
