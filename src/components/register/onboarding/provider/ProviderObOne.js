import React, { useState } from "react";
import logoWhite from "../../../../images/logo_wh.svg";
import NextButton from "../../buttons/NextButton";
import { axiosWithAuth } from "../../../../util/axiosWithAuth";
const ProviderOnboarding = props => {
  console.log("propsPro", props);
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
        <h2>Select all that apply</h2>
      </div>
      <form className="pageContent" onSubmit={handleSubmit}>
        <div>
          <div>
            <div className="chkBox">box</div>
            <div>I want to do events for</div>
          </div>
          <div>
            <div>
              <div className="chkBox">box</div>
              <div>text</div>
              <input name="chk1" type="hidden" />
            </div>
            <div>
              <div className="chkBox">box</div>
              <div>text</div>
              <input name="chk2" type="hidden" />
            </div>
          </div>
          <input name="chk0" type="hidden" />
        </div>

        <div>
          <div className="chkBox">box</div>
          <div>text</div>
          <input name="chk3" type="hidden" />
        </div>
        <div>
          <div className="chkBox">box</div>
          <div>text</div>
          <input name="chk4" type="hidden" />
        </div>
      </form>
      <NextButton {...props} goto="/new-account/provider-two" />
    </div>
  );
};

export default ProviderOnboarding;
