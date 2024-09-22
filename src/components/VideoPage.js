import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import CommentSection from "./CommentSection";

const VideoPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

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



  return (
    <div className="p-3  border border-red-600 w-[100%]   ">
      <div className="border border-green-700 w-[100%] lg:w-[67%] ">
        <iframe
          width="100%"
          height="500"
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
            <h1 className="font-semibold  text-2xl  whitespace-nowrap overflow-hidden text-ellipsis ">
              {videoInfo?.snippet?.localized?.title}
            </h1>
            <h1 className="font-medium my-2  text-lg  whitespace-nowrap overflow-hidden text-ellipsis">
              {videoInfo?.snippet?.channelTitle}
            </h1>
          </div>
        </div>
        <div className="w-[100%] border   border-yellow-500 h-[500px] ">
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
