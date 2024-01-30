import React, { useEffect, useState } from "react";
import Card from "./card";
import Carousel from "./Component/Carousel";
import "./Albumcard.css";

const Albumcard = ({ data, title }) => {
  const [showCarousel, setShowCarousel] = useState(true);

  const handleCollapseToggle = () => {
    setShowCarousel(!showCarousel);
  };

  console.log(data);

  return (
    <div className="section">
      <div className="header">
        <h2>{title}</h2>
        <button className="collapse-button" onClick={handleCollapseToggle}>
          {showCarousel ? "Show All" : "Collapse"}
        </button>
      </div>
      {showCarousel ? (
        <div className="top-albums-carousel">
          <Carousel items={data} />
        </div>
      ) : (
        <div className="top-albums-grid">
          {data.map((album) => (
            <Card data={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Albumcard;
