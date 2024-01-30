import React from "react";
import "../Carousel.css";
const RightButton = ({ className }) => {
  return (
    <div className={`${className}`}>
      <img src="/assests/right.png" alt="right Arrow" />
    </div>
  );
};

export default RightButton;
