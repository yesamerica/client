import React, { useState } from "react";
import logoWhite from "../../../../images/logo_wh.svg";
import FinishButton from "../../buttons/FinishButton";
import { axiosWithAuth } from "../../../../util/axiosWithAuth";
const ProviderObTwo = props => {
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
        <img  src={logoWhite} />
        <h2>Select all that apply</h2>
      </div>
      <form className="pageContent" onSubmit={handleSubmit}>
      
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="Address"
            placeholder="Office address"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="radius"
            placeholder="Radius of Service:8"
            onChange={handleChanges}
          />
        </div>
      </form>
      <FinishButton {...props} />
    </div>
  );
};

export default ProviderObTwo;
