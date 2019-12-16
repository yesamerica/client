import React, { useState } from "react";
import userIcon from "../../images/user_icon.svg";
import pwIcon from "../../images/pw_icon.svg";
import logoWhite from "../../images/logo_wh.svg";
import NoAccountButton from "./buttons/NoAccountButton";
import { axiosWithAuth } from "../../util/axiosWithAuth";
const LocalSignUpForm = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChanges = e => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log("user", user);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("user", user);
    axiosWithAuth()
      .post("/login", user)
      .then(res => {
        res.data.token 
        && localStorage.setItem("token", res.data.token)
        && props.history.push("/dashboard")
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };
  
  return (
    <div className="localSignIn">
      <img className="logo" src={logoWhite} />
      <form onSubmit={handleSubmit}>
        <div>
          <img src={userIcon} alt="Standard white user icon" />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChanges}
          />
        </div>
        <div>
          <img src={pwIcon} alt="Standard white lock icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChanges}
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          Sign In
        </button>
      </form>
      <NoAccountButton {...props} />
    </div>
  );
};

export default LocalSignUpForm;
