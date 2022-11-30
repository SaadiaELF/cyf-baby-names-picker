import React from "react";

const Name = (props) => {
  return (
    <button
      type="button"
      className={"name-btn " + props.class}
      onClick={props.handleClick}
      value={props.value}
    >
      {props.name}
    </button>
  );
};

export default Name;
