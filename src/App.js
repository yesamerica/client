import React, { useState} from "react";
import { Route } from "react-router-dom";
import SignInCanvas from "./components/register/";
import "./globals.scss";
import Loading from "./components/loading/";
import ProtectedRoute from "./util/ProtectedRoute";
import DashBoard from "./components/dashboard";

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
