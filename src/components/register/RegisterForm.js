import React, { useState } from "react";
import axios from "axios";
import userIcon from "../../images/user_icon.svg";
import pwIcon from "../../images/pw_icon.svg";
import logoWhite from '../../images/logo_wh.svg'
const RegisterForm = () => {
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://apidevnow.com/register", user)
      .then(res => console.log(res.data));
  };

  return (
    <div className="localRegister">
        <img className="logo" src={logoWhite} />
      <form onSubmit={handleSubmit}>
        <div>
          <img src={userIcon} alt="Standard white user icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
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
        <button type="submit">Sign Up</button>
      </form>
      <p>Don't Have an Account?</p>
    </div>
  );
};

export default RegisterForm;
