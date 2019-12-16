import React from "react";
import logoWhite from '../../images/logo_wh.svg'
import BackButton from './buttons/BackButton'
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
        <img className="logo" src={logoWhite} alt="Yes Americas logo"/>
        <div onClick={actType}><img src={companyIcon} alt="Building Icon"/><h2>I am a company looking to set up events for employees</h2></div>
        <div onClick={actType}><img src={providerIcon} alt="Microphone Icon"/><h2>I am a speaker or service provider looking to get out in my community</h2></div>
        <div onClick={actType}><img src={individualIcon} alt="User Icon"/><h2>I am an individual or group member looking to set up an event</h2></div>
        <div onClick={actType}><img src={sponsorIcon} alt="Gift Icon"/><h2>I am a sponsor who wants to support my community</h2></div>
        <BackButton {...props}/>
    </div>
  );
};

export default NoAccount;
