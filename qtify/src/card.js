import React from "react";
import "./Albumcard.css";

const Card = ({ data }) => {
  return (
    <div className="wrapper">
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
    </div>
  );
};

export default Card;
