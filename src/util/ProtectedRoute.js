import React from "react";
import {Redirect,Route} from 'react-router-dom'
const ProtectedRoute = ({ props,component: Component, ...rest }) => {
  // const Component = props.component

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // if token is in localstorage, render the given component
          return <Component {...props}/>;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
export default ProtectedRoute;

