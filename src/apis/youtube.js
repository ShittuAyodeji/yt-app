// import React from "react";
import axios from "axios";

const KEY = "AIzaSyAD2SEO8ylREE1W6QtyBHhqWj5TimZ7KzQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
