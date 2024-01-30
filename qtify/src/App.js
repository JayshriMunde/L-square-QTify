import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import { useEffect, useState } from "react";
import { fetchTopAlbums, fetchNewAlbums } from "./Component/APIfetch";
import "./index.css";
import Albumcard from "./Albumcard";
import Section from "./Component/Section/Section";
import axios from "axios";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

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
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Herosection />
      <Albumcard data={topAlbums} title="Top Albums" />
      <Albumcard data={newAlbums} title="New Albums" />
    </div>
  );
};

export default App;
