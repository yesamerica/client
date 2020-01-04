import React from "react";

const NoAccountButton = props => {
  return (
    <p className="NoAccountButton" onClick={() => props.history.push("/")}>
      Don't Have an Account?
    </p>
  );
};

export default NoAccountButton;
