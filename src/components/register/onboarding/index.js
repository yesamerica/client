import React from "react";
import CompanyOnboarding from "./company/CompanyOnboarding";
import ProviderOnboarding from "./provider/ProviderObOne";
import ProviderObTwo from "./provider/ProviderObTwo";
import IndividualOnboarding from "./individual/IndividualOnboarding";
import SponsorOnboarding from "./sponsor/SponsorOnboarding";
import { Route, Switch } from "react-router-dom";

const Onboarding = props => {
  const {url} = props.match
  return (
    <>
      <Switch>
        <Route path={`${url}/company`} component={CompanyOnboarding} />
        <Route path={`${url}/provider`} component={ProviderOnboarding} />
        <Route path={`${url}/provider-two`} component={ProviderObTwo} />
        <Route
          path={`${url}/individual`}
          component={IndividualOnboarding}
        />
        <Route path={`${url}/sponsor`} component={SponsorOnboarding} />
  
      </Switch>
    </>
  );
};

export default Onboarding;
