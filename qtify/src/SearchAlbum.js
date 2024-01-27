import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchAlbum.css";
<SearchAlbum className="css"></SearchAlbum>;

function SearchAlbum() {
  return (
    <div className="search-container">
      <div className="search-input">
        <input type="text" placeholder="Search a song of your choice" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </div>
  );
}
export default SearchAlbum;
