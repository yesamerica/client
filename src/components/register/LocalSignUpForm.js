import React, { useState } from "react";
import axios from "axios";
import userIcon from "../../images/user_icon.svg";
import pwIcon from "../../images/pw_icon.svg";
import logoWhite from '../../images/logo_wh.svg'
import NoAccountButton from './NoAccountButton'
const LocalSignUpForm = (props) => {
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

<<<<<<< HEAD
  return (
    <div className="localSignIn">
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
=======
    return(
        <div className="localSignIn">
            <form onSubmit ={handleSubmit}>
                <input 
                type="text"
                name="email"
                placeholder="Enter Your Email Address Here"
                onChange={handleChanges}
                />
                <input 
                type="password"
                name ="password"
                placeholder="Create Your Password"
                onChange={handleChanges}
                />
                <button type='submit'>Sign Up</button>
            </form>
>>>>>>> 674ceb65bb76ceaebe51e91c537bf49790a56c84
        </div>
        <button type="submit">Sign In</button>
      </form>
      <NoAccountButton {...props} />
    </div>
  );
};



export default LocalSignUpForm;
