import React from "react";
import InputRadio from "./InputRadio";

const GenderFilter = (props) => {
  return (
    <div className="gender-filter" onChange={props.handleCheck}>
      <InputRadio name="none" text="None"/>
      <InputRadio name="f" text="Girls names" />
      <InputRadio name="m" text="Boys names" />
    </div>
  );
};

export default GenderFilter;
