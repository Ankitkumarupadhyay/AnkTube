import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY, videoInfo } from "../utils/constants";

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
  // console.log(videoInfo);

  return (
    <div className="p-3 fixed">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-hidden="false"
      ></iframe>
      <h1 className="font-semibold text-2xl">{videoInfo?.snippet?.localized?.title}</h1>
      <h1>{videoInfo?.snippet?.channelTitle}</h1>
    </div>
  );
};

export default VideoPage;
