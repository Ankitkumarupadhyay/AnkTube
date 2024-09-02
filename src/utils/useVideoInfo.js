import { useState, useEffect } from "react";
import { API_KEY } from "./constants";

const useVideoInfo = (category) => {
  // console.log(category)
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=iphone&regionCode=IN&key=" +
    //     API_KEY
    // );
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` +
        API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setVideoList(json.items);
  };
  return videoList;
};

export default useVideoInfo;
