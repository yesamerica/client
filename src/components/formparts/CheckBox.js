import React, { useState } from "react";

const CheckBox = props => {
  const [value, setValue] = useState(props.true);

  return (
    <div onClick={() => setValue(!value)} className="chkBox">
      {value && <div className="checked">{'\u2714'}</div>}
      <input name={props.name} type="hidden" value={value} />
    </div>
  );
};

export default CheckBox;
