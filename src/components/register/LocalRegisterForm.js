import React, { useState } from "react";
import { axiosWithAuth } from "../../util/axiosWithAuth";
import logoWhite from "../../images/logo_wh.svg";
import BackButton from "./buttons/BackButton";

const LocalRegisterForm = props => {
  const [errors, setErros] = useState();
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
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/new-account");
        } else {
          setErros(res.data.errors);
        }
      })
      .catch(res => console.log(res.data));
  };

  return (
    <div className="structuredPage">
      <div className="pageTitle">
        <img src={logoWhite} />
      </div>
      <form className="pageContent" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
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
          Sign Up
        </button>
      </form>
      <BackButton {...props} />
    </div>
  );
};

export default LocalRegisterForm;
