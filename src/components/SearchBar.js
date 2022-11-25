import React from "react";

const SearchBar = (props) => {
  return (
    <div className="search">
      <label id="search-label" htmlFor="search-input">
        Search for a baby name
      </label>
      <input
        id="search-input"
        type="text"
        name="search-input"
        placeholder="Search ..."
        onChange={props.handleChange}
      />
    </div>
  );
};

export default SearchBar;
