import React from "react";
import Logo from "./Logo";
import "./Navbar.css";
import SearchAlbum from "./SearchAlbum";
import Feedbackfrom from "./Feedbackfrom";
import "./SearchAlbum.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <SearchAlbum />
      <Feedbackfrom />
    </div>
  );
};

export default Navbar;
