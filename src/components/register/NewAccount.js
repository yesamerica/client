import React from "react";




const NewAccount = props => {
  const actType = e => {
    console.log(e.currentTarget.id);
    props.history.push(`/new-account/${e.currentTarget.id}`);
  };
  return (
    <div className="structuredPage newAccount">
      <div className="pageTitle">
        <img src={logoWhite} alt="Yes Americas logo" />
      </div>
      <div className="pageContent">
        <div id="company" className="selectUserRole" onClick={actType}>
          <img src={companyIcon} alt="Building Icon" />
          <h2>I am a company looking to set up events for employees</h2>
        </div>
        <div id="provider" className="selectUserRole" onClick={actType}>
          <img src={providerIcon} alt="Microphone Icon" />
          <h2>
            I am a speaker or service provider looking to get out in my
            community
          </h2>
        </div>
        <div id="individual" className="selectUserRole"  onClick={actType}>
          <img src={individualIcon} alt="User Icon" />
          <h2>I am an individual or group member looking to set up an event</h2>
        </div>
        <div id="sponsor" className="selectUserRole" onClick={actType}>
          <img src={sponsorIcon} alt="Gift Icon" />
          <h2>I am a sponsor who wants to support my community</h2>
        </div>
      </div>
      
    </div>
  );
};

export default NewAccount;

{
  /* <Route exact path="/company-onboarding" component={CompanyOnboarding} />
      <Route exact path="/provider-onboarding" component={CompanyOnboarding} />
      <Route exact path="/individaul-onboarding" component={CompanyOnboarding} />
      <Route exact path="/sponsor-onboarding" component={CompanyOnboarding} /> */
}
