import React from "react";
import "./Albumcard.css";

const Card = ({ albumImage, follows, albumName }) => {
  return (
    <div className="wrapper">
      <div className="card">
        <img src={albumImage} alt="Album Cover" className="album-image" />
        <div className="follows">
          <p className="follower">${follows} Follows </p>
        </div>
      </div>
      <div className="info">
        <h2 className="album-name">{albumName}</h2>
      </div>
    </div>
  );
};

export default Card;
