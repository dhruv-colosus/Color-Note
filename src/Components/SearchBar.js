import React from "react";
import "./SearchBar.css";
function SearchBar(props) {
  const searchHandler = (event) => {
    props.searchHandler(event);
  };
  return (
    <>
      <div className="searchbar">
        <i className="fas fa-search"></i>
        <input
          className="searchbar_input"
          placeholder="Search"
          onChange={(event) => searchHandler(event)}
        />
      </div>
    </>
  );
}

export default SearchBar;
