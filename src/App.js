import React, { useState} from "react";
import SignInCanvas from "./components/register/";
import "./globals.scss";
import Loading from "./components/loading/";
import { Route } from "react-router-dom";
import LocalSignUpForm from "./components/register/LocalSignInForm";
import RegisterForm from "./components/register/LocalRegisterForm";
import NoAccount from "./components/register/onboarding";
import ProtectedRoute from "./util/ProtectedRoute";
import DashBoard from "./components/dashboard";
import CompanyOnboarding from './components/register/onboarding/CompanyOnboarding'
function App(props) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
   loading && setLoading(false)
  }, 2000);

  return loading ? ( <Loading />) : (
    <>
      <Route  path="/" component={SignInCanvas} />
      <ProtectedRoute path="/dashboard" component={DashBoard} />
    </>
  );
}

export default App;
