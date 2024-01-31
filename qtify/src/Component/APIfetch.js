import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchGenreList = async () => {
  try {
    const allObj = {
      key: "all",
      label: "All",
    };
    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    const genreData = res.data.data;
    genreData.unshift(allObj);
    return genreData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
