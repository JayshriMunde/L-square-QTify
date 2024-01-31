import React from "react";
import { Tooltip } from "@mui/material";

import "./Albumcard.css";

const Card = ({ data }) => {
  return (
    <div className="wrapper">
      <Tooltip
        title={data.songs && `${data.songs.length} Songs`}
        placement="top"
        arrow
      >
        <div className="card">
          <img src={data.image} alt="Album Cover" className="album-image" />
          <div className="follows">
            <p className="follower">
              {data.hasOwnProperty("follows")
                ? `${data.follows} Follows`
                : `${data.likes} Likes`}
            </p>
          </div>
        </div>
        <div className="info">
          <h2 className="album-name">{data.title}</h2>
        </div>
      </Tooltip>
    </div>
  );
};

export default Card;
