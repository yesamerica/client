import React, { useState } from "react";

import logoWhite from "../../../images/logo_wh.svg";

const CompanyOnboarding = props => {
  const [user, setUser] = useState({});

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
    // axiosWithAuth()
    //   .post("/login", user)
    //   .then(res => {
    //     if (res.data.token) {
    //       localStorage.setItem("token", res.data.token);
    //       props.history.push("/dashboard");
    //     }
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <div className="CompanyOnboarding">
      <img className="logo" src={logoWhite} />
      <h1>Basic Information about my Company / Organization</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company / Organiztion"
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
            name="address"
            placeholder="Address"
            onChange={handleChanges}
          />
        </div>
        <div>
          <p>Number of employees</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChanges}
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyOnboarding;
