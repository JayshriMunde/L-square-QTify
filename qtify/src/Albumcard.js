import React, { useEffect, useState } from "react";
import Card from "./card.js";
import Carousel from "./Component/Carousel";
import "./Albumcard.css";

const Albumcard = ({ data, title }) => {
  const [showCarousel, setShowCarousel] = useState(true);

  const handleCollapseToggle = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <div className="section">
      <div className="header">
        <h2>{title}</h2>
        <h4 className="collapse-button" onClick={handleCollapseToggle}>
          {showCarousel ? "Show All" : "Collapse"}
        </h4>
      </div>
      {showCarousel ? (
        <div className="top-albums-carousel">
          <Carousel items={data} />
        </div>
      ) : (
        <>
          <div className="top-albums-grid">
            {data.map((album) => (
              <Card data={album} type="album" />
            ))}
          </div>
          {title !== "New Albums" && <hr className="divider" />}
        </>
      )}
    </div>
  );
};

export default Albumcard;
