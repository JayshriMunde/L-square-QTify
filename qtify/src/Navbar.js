import React from "react";
import Logo from "./Logo";
import "./Navbar.css";
import SearchAlbum from "./SearchAlbum";
import Feedbackfrom from "./Feedbackfrom";
import "./SearchAlbum.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchAlbum />
      <Feedbackfrom />
    </nav>
  );
};

export default Navbar;
