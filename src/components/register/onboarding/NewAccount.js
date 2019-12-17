import React from "react";
import BackButton from '../buttons/BackButton'

// images
import logoWhite from '../../../images/logo_wh.svg'
import companyIcon from '../../../images/company_icon.svg'
import individualIcon from '../../../images/individual_icon.svg'
import providerIcon from '../../../images/provider_icon.svg'
import sponsorIcon from '../../../images/sponsor_icon.svg'

const NewAccount = (props) => {
  const actType = e =>{
    console.log(e.currentTarget.id)
    props.history.push(`/new-account/${e.currentTarget.id}`)
  }
  return (
    <div className="noAccount">
        <img className="logo" src={logoWhite} alt="Yes Americas logo"/>
        <div id="company" onClick={actType}><img src={companyIcon} alt="Building Icon"/><h2>I am a company looking to set up events for employees</h2></div>
        <div id="provider" onClick={actType}><img src={providerIcon} alt="Microphone Icon"/><h2>I am a speaker or service provider looking to get out in my community</h2></div>
        <div id="individual" onClick={actType}><img src={individualIcon} alt="User Icon"/><h2>I am an individual or group member looking to set up an event</h2></div>
        <div id="sponsor" onClick={actType}><img src={sponsorIcon} alt="Gift Icon"/><h2>I am a sponsor who wants to support my community</h2></div>
        <BackButton {...props}/>
    </div>
  );
};

export default NewAccount;

{/* <Route exact path="/company-onboarding" component={CompanyOnboarding} />
      <Route exact path="/provider-onboarding" component={CompanyOnboarding} />
      <Route exact path="/individaul-onboarding" component={CompanyOnboarding} />
      <Route exact path="/sponsor-onboarding" component={CompanyOnboarding} /> */}