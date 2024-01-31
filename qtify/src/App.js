import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import { useEffect, useState } from "react";
import "./index.css";
import Albumcard from "./Albumcard";
import axios from "axios";
import { fetchGenreList, fetchSongs } from "./Component/APIfetch";
import SongAlbums from "./Component/Section/SongAlbums.js";
import "./App.css";
const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const fetchAlbums = async (type) => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/" + type
      );

      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setTopAlbums(await fetchAlbums("top"));
      setNewAlbums(await fetchAlbums("new"));
      setSongs(await fetchSongs());
      setGenreList(await fetchGenreList());
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Herosection />
      <Albumcard data={topAlbums} title="Top Albums" />
      <Albumcard data={newAlbums} title="New Albums" />
      <hr className="divider" />
      <div>
        <SongAlbums data={songs} title="Songs" genreList={genreList} />
      </div>
      <hr className="divider" />
    </div>
  );
};

export default App;
