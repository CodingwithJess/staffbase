import React, { useContext } from "react";
import "./SearchName.css";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Here"
          aria-label="Search Here"
          onChange= {e => context.handleSearchChange(e)}
        />
        <button 
          className="btn my-2 my-sm-0" 
          type="submit">
            Search
        </button>
      </form>
    </div>
  );
};

export default SearchName