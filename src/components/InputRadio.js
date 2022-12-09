import React from "react";

const InputRadio = ({ name, text }) => {
  return (
    <div className="gender-input">
      <input type="radio" id={name} name="gender" value={name} />
      <label className="label" htmlFor={name}>
        {text}
      </label>
    </div>
  );
};

export default InputRadio;
