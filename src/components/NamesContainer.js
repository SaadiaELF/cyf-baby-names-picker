import React from "react";
import Name from "./Name";
const NamesContainer = (props) => {
  return (
    <div className="names-container">
      {props.names.map((baby, index) => {
        return (
          <Name
            key={index}
            name={baby.name}
            value={index}
            class={baby.sex + "-name"}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
};

export default NamesContainer;
