import React from "react";
const Name = (props) => {
  return <div className={"name-div " + props.class}>{props.name}</div>;
};

export default Name;
