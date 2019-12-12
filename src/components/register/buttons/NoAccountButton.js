import React from "react";


const NoAccountButton = (props) => {
  
  return (
        <p onClick={()=>props.history.push("/new-account")}>Don't Have an Account?</p>
  );
};

export default NoAccountButton;
