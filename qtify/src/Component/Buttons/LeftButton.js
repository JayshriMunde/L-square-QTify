import React from "react";
import "../Carousel.css";
const LeftButton = ({ className }) => {
  return (
    <div className={`${className}`}>
      <img src="/assests/left.png" alt="Left Arrow" />
    </div>
  );
};

export default LeftButton;
