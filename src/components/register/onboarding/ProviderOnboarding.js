import React, { useState } from "react";
import logoWhite from "../../../images/logo_wh.svg";
import NextButton from "../buttons/NextButton";
import { axiosWithAuth } from "../../../util/axiosWithAuth";
const ProviderOnboarding = props => {
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
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/dashboard");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="structuredPage">
      <div className="pageTitle">
        <img className="logo" src={logoWhite} />
        <h2>Please fill out some basic information about your practice</h2>
      </div>
      <form className="pageContent" onSubmit={handleSubmit}>
        
        <div>
          <input
            type="text"
            name="fname"
            placeholder="First name"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Office Number"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Cell"
            onChange={handleChanges}
          />
        </div>
      </form>
      <NextButton {...props} goto="/new-account/provider-two" />
    </div>
  );
};

export default ProviderOnboarding;
