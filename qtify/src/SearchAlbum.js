import React from "react";
import "./Navbar.css";
import "./SearchAlbum.css";

function SearchAlbum() {
  return (
    <div className="search-input">
      <input type="text" placeholder="Search a song of your choice" />
      <img
        src="assests/Search_icon.png"
        alt="Figma Icon"
        className="search-icon"
      />
    </div>
  );
}
export default SearchAlbum;
