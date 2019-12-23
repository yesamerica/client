import React from "react";
import OnboardingLanding from "./NewAccount";
import CompanyOnboarding from "./CompanyOnboarding";
import ProviderOnboarding from "./ProviderOnboarding";
import ProviderObTwo from "./ProviderObTwo";
import IndividualOnboarding from "./IndividualOnboarding";
import SponsorOnboarding from "./SponsorOnboarding";
import { Route, Switch } from "react-router-dom";

const Onboarding = props => {
  console.log(props);
  return (
    <>
      <Switch>
        <Route path={`/new-account/company`} component={CompanyOnboarding} />
        <Route path="/new-account/provider" component={ProviderOnboarding} />
        <Route path="/new-account/provider-two" component={ProviderObTwo} />
        <Route
          path="/new-account/individual"
          component={IndividualOnboarding}
        />
        <Route path="/new-account/sponsor" component={SponsorOnboarding} />
        <Route path="/new-account" component={OnboardingLanding} />
      </Switch>
    </>
  );
};

export default Onboarding;
