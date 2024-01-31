import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Tab } from "@mui/material";
import Carousel from "../Carousel.js";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Card from "../../card.js";
import "../../Albumcard.css";

const CustomTab = styled(Tab)({
  color: "#fff",
  "&.Mui-selected": {
    borderBottom: "5px solid #1bc237",
    color: "#fff",
  },
  ".MuiTabs-indicator": {
    color: "#fff",
  },
});
const SongAlbums = ({ data, title, genreList }) => {
  const [value, setValue] = useState("all");
  const [songData, setSongData] = useState(data);
  const [showCarousel, setShowCarousel] = useState(true);

  function sortByGenre(data, genreType) {
    console.log(genreType);

    if (genreType === "all") {
      return data;
    }
    return data.filter((item) => {
      return item.genre.key === genreType;
    });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setSongData(sortByGenre(data, value));
  }, [value, data]);

  return (
    <div className="section">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <TabContext value={value}>
        <Box className="tabWrapper">
          <TabList
            onChange={handleChange}
            aria-label="Genre Tab"
            className="indicator"
          >
            {genreList.map((genre) => (
              <CustomTab
                key={genre.key}
                label={genre.label}
                value={genre.key}
                TabIndicatorProps={{ className: "indicator" }}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel className="tab" value={value}>
          {showCarousel ? (
            <div className="top-albums-carousel">
              <Carousel items={songData} />
            </div>
          ) : (
            <div className="top-albums-grid">
              {songData.map((album) => (
                <Card data={album} type="album" />
              ))}
            </div>
          )}
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default SongAlbums;
