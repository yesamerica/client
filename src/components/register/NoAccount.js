import React, { useState } from "react";
import logoWhite from '../../images/logo_wh.svg'
import BackButton from './BackButton'
import companyIcon from '../../images/company_icon.svg'
import individualIcon from '../../images/individual_icon.svg'
import providerIcon from '../../images/provider_icon.svg'
import sponsorIcon from '../../images/sponsor_icon.svg'

const NoAccount = (props) => {
  const actType = () =>{
    props.history.push('/register')
  }
  return (
    <div className="noAccount">
        <img className="logo" src={logoWhite} />
        <div onClick={actType}><img src={companyIcon}/><h2>I am a company looking to set up events for employees</h2></div>
        <div onClick={actType}><img src={providerIcon}/><h2>I am a speaker or service provider looking to get out in my community</h2></div>
        <div onClick={actType}><img src={individualIcon}/><h2>I am an individual or group member looking to set up an event</h2></div>
        <div onClick={actType}><img src={sponsorIcon}/><h2>I am a sponsor who wants to support my community</h2></div>
        <BackButton {...props}/>
    </div>
  );
};

export default NoAccount;
