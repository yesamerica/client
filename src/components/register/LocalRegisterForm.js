import React, { useState } from "react";
import userIcon from "../../images/user_icon.svg";
import pwIcon from "../../images/pw_icon.svg";
import emailIcon from "../../images/email_icon.svg";
import logoWhite from "../../images/logo_wh.svg";
import { axiosWithAuth } from "../../util/axiosWithAuth";
import FinishButton from "./buttons/FinishButton";
import FacebookSignInButton from "./buttons/FacebookSignInButton";
import GoogleSignInButton from "./buttons/GoogleSignInButton";
const LocalSignInForm = props => {
  const [errors, setErros] = useState([]);
  const [user, setUser] = useState({});

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const findErrors = key => {
    let relativeErrors = [];
    errors &&
      errors.map(error => {
        error[key] && relativeErrors.push(error[key]);
      });
    return relativeErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/register", user)
      .then(res => {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/dashboard");
        } else {
          setErros(res.data.errors);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="structuredPage Register">
      <div className="pageTitle">
        <img src={logoWhite} />
      </div>

      <form className="pageContent" onSubmit={handleSubmit}>
        <div>
          <img src={emailIcon} alt="Standard white user icon" />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChanges}
          />
        </div>
        {errors &&
          findErrors("email").map((err, i) => (
            <p className="errors" key={i}>
              {err}
            </p>
          ))}
        <div>
          <img src={pwIcon} alt="Standard white lock icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChanges}
          />
        </div>
        {errors &&
          findErrors("password").map((err, i) => (
            <p className="errors" key={i}>
              {err}
            </p>
          ))}
        <div>
          <img src={userIcon} alt="Standard white lock icon" />
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            // onChange={handleChanges}
          />
        </div>

        <div className="AuthContainer">
          <h2>Or, continue with </h2>
          <div>
            <FacebookSignInButton {...props}/>
            <GoogleSignInButton {...props}/>
          </div>
        </div>

        <FinishButton onClick={handleSubmit} {...props} />
      </form>
    </div>
  );
};

export default LocalSignInForm;
