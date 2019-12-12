import React, { useState } from "react";
import axios from "axios";
import logoWhite from "../../images/logo_wh.svg";
import BackButton from "./buttons/BackButton";

const RegisterForm = props => {
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
      .post("https://yesamerica-api.herokuapp.com/register", user)
      .then(res => {

        localStorage.setItem("token", res.data.token);
        props.history.push('/dashboard')
      })
      .catch(res => console.log(res.data));
  };

  return (
    <div className="localRegister">
      <img className="logo" src={logoWhite} />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChanges}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <BackButton {...props} />
    </div>
  );
};

export default RegisterForm;
