import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoInfo from "../utils/useVideoInfo";
import { useSelector } from "react-redux";

const VideoContainer = () => {
 useVideoInfo()
  // const videoList = useVideoInfo();
  const videoList = useSelector(store=> store.videoList.allVideos)
// console.log(videoList)

  if (videoList.length === 0) return <h1>loading</h1>;

  return (
    <div className="flex flex-wrap  ">
      {videoList.map((video) => (
        
        
        <Link
          to={"/watch?v=" + `${video?.kind === "youtube#searchResult" ? video?.id?.videoId : video?.id}` }
          // video?.id ||
          info={video}
          className="mx-auto"
          key={video?.id}
        >
          <VideoCard info={video} key={video?.id} />
          {/* {video?.kind === "youtube#searchResult" ? console.log(video?.id?.videoId)  : console.log(video?.id)} */}
          
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
