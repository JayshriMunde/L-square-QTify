// CarouselWithNavigation.js

import React from "react";
import Carousel from "./Carousel";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

const CarouselWithNavigation = ({ items }) => {
  return (
    <div className="carousel-with-navigation">
      <LeftButton />
      <Carousel items={items} />
      <RightButton />
    </div>
  );
};

export default CarouselWithNavigation;
