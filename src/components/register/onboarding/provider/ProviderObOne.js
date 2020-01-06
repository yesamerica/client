import React, { useState } from "react";
import logoWhite from "../../../../images/logo_wh.svg";
import NextButton from "../../buttons/NextButton";
import { axiosWithAuth } from "../../../../util/axiosWithAuth";
import CheckBox from "../../../formparts/CheckBox";
const ProviderOnboarding = props => {
  console.log("propsPro", props);
  const [user, setUser] = useState();
  const [isTrue,setIsTrue]= useState(false)

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
    <div className="structuredPage  provider">
      <div className="pageTitle">
        <img className="logo" src={logoWhite} />
        <h2>Select all that apply</h2>
      </div>
      <form className="pageContent" onSubmit={handleSubmit}>
        <div>
          <CheckBox isTrue={isTrue} setIsTrue={setIsTrue}/>
          <div>I want to do events for</div>
        </div>
        <div className="upperGroup">
          <div>
            <CheckBox isTrue={isTrue}/>
            <div>Companies & Organizations</div>
          </div>
          <div>
            <CheckBox isTrue={isTrue}/>
            <div>Events created by individuals and groups</div>
          </div>
        </div>
        {/* end upperGroup */}

        <div>
          <CheckBox isTrue={isTrue}/>
          <div>I want to create my own events</div>
          <input name="chk3" type="hidden" />
        </div>
        <div>
          <CheckBox isTrue={isTrue}/>
          <div>I want to list my services and get bookings</div>
          <input name="chk4" type="hidden" />
        </div>
      </form>
      <NextButton {...props} goto="/register" />
    </div>
  );
};

export default ProviderOnboarding;
