import React from "react";
import "./Albumcard.css";
import Card from "./card";
import { useEffect, useState } from "react";
import axios from "axios";

const Albumcard = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );

      if (response.data) {
        setTopAlbums(response.data);
      }
    } catch (error) {
      console.error("Error fetching top albums:", error.message);
    }
  };
  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );

      if (response.data) {
        setNewAlbums(response.data);
      }
    } catch (error) {
      console.error("Error fetching top albums:", error.message);
    }
  };
  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  return (
    <div className="section">
      <div className="header">
        <h2>Top Albums</h2>
        <button className="collapse-button">Collapse</button>
      </div>
      <div className="top-albums-grid">
        {topAlbums.map((album) => (
          <Card
            key={album.id}
            albumImage={album.image}
            follows={album.follows}
            albumName={album.title}
          />
        ))}
      </div>
      <div className="header">
        <h2>New Albums</h2>
        <button className="collapse-button">Collapse</button>
      </div>
      <div className="top-albums-grid">
        {newAlbums.map((album) => (
          <Card
            key={album.id}
            albumImage={album.image}
            follows={album.follows}
            albumName={album.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Albumcard;
