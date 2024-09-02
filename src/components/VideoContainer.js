import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoInfo from "../utils/useVideoInfo";

const VideoContainer = () => {
  // const[category,setCategory]=useState("mostPopular")
  const[category,setCategory]=useState("song")

  const videoList = useVideoInfo(category);
  // console.log(videoList);

  if (videoList.length === 0) return <h1>loading</h1>;

  return (
    <div className="flex flex-wrap  ">
      {videoList.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          info={video}
          className="mx-auto"
          key={video?.id}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
