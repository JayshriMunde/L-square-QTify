import { useState } from "react";
import Card from "../../card";
import Carousel from "../Carousel";
const Section = ({ data, title }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className="header">
        <h3>{title}</h3>
        {title && (
          <h4 className="collapse-button" onClick={handleToggle}>
            {carouselToggle ? "Show All" : "collapse All"}
          </h4>
        )}
      </div>

      {carouselToggle ? (
        <div className="header">
          {data.map((item) => (
            <Card key={item.id} data={item} type="album" />
          ))}
        </div>
      ) : (
        <Carousel
          data={data}
          componentRender={(ele) => <Card data={ele} type="album" />}
        />
      )}
    </div>
  );
};

export default Section;
