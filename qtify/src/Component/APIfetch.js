import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
