import React, { useState } from "react";
import searchIcon from "./images/searchIcon.png"
const SearchBar = (setSearchQuery) => {
    const [query, setQuery] = useState('');
    const handleChange = (e) =>{
        setQuery(e.target.value);
        setSearchQuery(e.tyarget.value)
    };

    return (
    <div id="searchBar">
        <div className="dropdown">
            <button id="dropdownBtn">
                All
            </button>
            <div className="dropdown-content">
                <a href="/"> product</a>
                <a href="/"> product</a>
                <a href="/"> product</a>
                <a href="/"> product</a>
                <a href="/"> product</a>

            </div>
        </div>
        <input type="text" value={query} onChange={handleChange} placeholder="search here"/>
        <div id="searchIcon"> <img id="searchBtn" src= {searchIcon} placeholder="searchIcon"/></div>
    </div>
  );
};
export default SearchBar;
