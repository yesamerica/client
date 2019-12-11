import React, { useState } from "react";
import logoWhite from '../../images/logo_wh.svg'
import BackButton from './BackButton'
const NoAccount = (props) => {
  
  return (
    <div className="noAccount">
        <img className="logo" src={logoWhite} />
        <div><img/><h2>I am a company looking to set up events for employees</h2></div>
        <div><img/><h2>I am a speaker or service provider looking to get out in my community</h2></div>
        <div><img/><h2>I am an individual or group member looking to set up an event</h2></div>
        <div><img/><h2>I am a sponsor who wants to support my community</h2></div>
        <BackButton {...props}/>
    </div>
  );
};

export default NoAccount;
