import React, { useState,useEffect } from "react";

const CheckBox = props => {
  const {isTrue,setIsTrue} = props
  const [value, setValue] = useState(isTrue);
  
  const handleClick = () =>{
    setValue(!value)
    setIsTrue && setIsTrue(!isTrue)
  }

  return (
    <div onClick={handleClick} className="chkBox">
      {value && <div className="checked">{'\u2714'}</div>}
      <input name={props.name} type="hidden" value={value} />
    </div>
  );
};

export default CheckBox;
