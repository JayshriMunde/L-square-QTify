import React from "react";
import Logo from "./Logo";
import "./Navbar.css";
import SearchAlbum from "./SearchAlbum";
import Feedbackfrom from "./Feedbackfrom";
import "./SearchAlbum.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="assests/Logo.png" alt="Logo" className="logo" />
      <input type="text" placeholder="Search a song of your choice" />

      <div className="search-container">
        <div className="search-input">
          {" "}
          <img
            src="assests/search icon.png"
            alt="Figma Icon"
            className="search-icon"
          />
        </div>
      </div>
      <Feedbackfrom />
    </div>
  );
};

export default Navbar;
