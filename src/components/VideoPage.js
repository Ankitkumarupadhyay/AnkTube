import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import CommentSection from "./CommentSection";
import VideoInfo from "./VideoInfo";
import useChannelInfo from "../utils/useChannelInfo";

const VideoPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [searchParams] = useSearchParams();
 
  // console.log(searchParams.get("v"));

  // const channelInformation = useChannelInfo(videoInfo?.snippet?.channelId);
  // console.log(channelInformation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    fetchData();
    
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParams.get("v") +
        "&key=" +
        API_KEY
    );
    const json = await data.json();

    setVideoInfo(json?.items[0]);
  };
  


  if (videoInfo.length === 0) return;

  return (
    <div className="   w-[100%]   ">
      <div className="aspect-video w-[100%] lg:w-[67%] ">
        <iframe
          width="100%"
          height="600"
          
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          autoPlay
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          aria-hidden="false"
        ></iframe>
        <div className="details pt-5 px-3 ">
          <div>
            <h1 className="font-semibold  text-lg sm:text-2xl   ">
              {videoInfo?.snippet?.localized?.title}
            </h1>
          </div>
        </div>
        <div className="w-[100%]     h-[500px] ">
          <VideoInfo videoInfo={videoInfo} />
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
