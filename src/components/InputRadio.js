import React from "react";

const InputRadio = (props) => {
  return (
    <div className="gender-input">
      <input type="radio" id={props.name} name="gender" value={props.name} />
      <label className="label" htmlFor={props.name}>
        {props.text}
      </label>
    </div>
  );
};

export default InputRadio;
