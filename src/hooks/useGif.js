import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSrc = data.data.images.downsized_large.url;
    console.log(imgSrc);
    setGif(imgSrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
