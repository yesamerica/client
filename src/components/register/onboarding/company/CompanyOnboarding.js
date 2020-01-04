import React, { useState } from "react";
import logoWhite from "../../../../images/logo_wh.svg";
import FinishButton from "../../buttons/FinishButton";
import { axiosWithAuth } from "../../../../util/axiosWithAuth";
const CompanyOnboarding = props => {
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
        <img src={logoWhite} />
        <h2>Lets get started</h2>
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
            name="company"
            placeholder="Company / Organization"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Direct phone"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="Address"
            placeholder="Address"
            onChange={handleChanges}
          />
        </div>

        <div>
          <h2>Number of Employees</h2>
          <input type="number" name="employee_count" onChange={handleChanges} />
        </div>
      </form>
      <FinishButton {...props} />
    </div>
  );
};

export default CompanyOnboarding;
