import React, { useState } from "react";
import userIcon from "../../images/user_icon.svg";
import pwIcon from "../../images/pw_icon.svg";
import logoWhite from "../../images/logo_wh.svg";
import NoAccountButton from "./buttons/NoAccountButton";
import { axiosWithAuth } from "../../util/axiosWithAuth";
import BackButton from "./buttons/BackButton";
const LocalSignInForm = props => {
  const [errors, setErros] = useState([]);
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

  const findErrors = key => {
    let relativeErrors = [];
    console.log(errors);
    errors &&
      errors.map(error => {
        error[key] && relativeErrors.push(error[key]);
      });
    return relativeErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("user", user);
    axiosWithAuth()
      .post("/login", user)
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/signin");
        } else {
          console.log(res.data.errors);
          setErros(res.data.errors);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="localSignIn">
      <img className="logo" src={logoWhite} />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <img src={userIcon} alt="Standard white user icon" />
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
          <button onClick={handleSubmit} type="submit">
            Sign In
          </button>
        </form>
        <NoAccountButton {...props} />
      </div>
      <BackButton {...props} />
    </div>
  );
};

export default LocalSignInForm;
