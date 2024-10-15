import React, { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

const VideoInfo = ({ videoInfo }) => {
  const [channelInfo, setChannelInfo] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  //   console.log(videoInfo);

  useEffect(() => {
    fetchChannelData();
  }, []);

  const fetchChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoInfo?.snippet?.channelId}&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
    );

    const json = await data.json();

    setChannelInfo(json?.items[0]);
  };
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };
  const handleLike = () => {
    setIsDislike(false);
    setIsLike(!isLike);
  };
  const handleDislike = () => {
    setIsDislike(!isDislike);
    setIsLike(false);
  };

  if (channelInfo.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="flex sm:flex-row flex-col justify-between">
      <div className="flex py-2 items-center gap-3">
        <img
          className="cursor-pointer object-cover rounded-full mx-0 h-12 w-12 "
          src={
            channelInfo?.snippet?.thumbnails?.default?.url ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          }
          alt="icon"
        />
        <h1 className="font-medium my-2 text-base  sm:text-lg leading-[20px]   whitespace-nowrap overflow-hidden text-ellipsis">
          {videoInfo?.snippet?.channelTitle} <br />{" "}
          <span className="text-gray-500  text-sm">
            {channelInfo?.statistics?.subscriberCount > 1000000
              ? `${
                  channelInfo?.statistics?.subscriberCount / 1000000
                }M Subscribers`
              : `${
                  channelInfo?.statistics?.subscriberCount / 1000
                }K Subscribers`}
          </span>
        </h1>
        <button
          onClick={handleSubscribe}
          className="py-1 flex items-center justify-center gap-1 px-2 sm:px-4 m-1 sm:m-2 font-medium sm:font-semibold bg-gray-400 rounded-full"
        >
          {isSubscribed ? (
            <>
              <FaRegBell /> Subscribed
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      <div className="flex items-center  py-2  gap-3 sm:justify-center">
        <div className="flex bg-gray-400   m-2 rounded-full  ">
          <button
            onClick={handleLike}
            className="py-1 px-4 gap-1   flex items-center justify-center border-r border-black    font-semibold  "
          >
            {isLike ? <BiSolidLike size={"20px"} /> : <BiLike size={"20px"} />}{" "}
            {videoInfo?.statistics?.likeCount > 1000000
              ? `${(videoInfo?.statistics?.likeCount / 1000000).toFixed("0")}M`
              : `${(videoInfo?.statistics?.likeCount / 1000).toFixed("0")}K`}
          </button>
          <button
            onClick={handleDislike}
            className="py-1 px-2 flex items-center  justify-center  font-semibold  "
          >
            {isDislike ? (
              <BiSolidDislike size={"20px"} />
            ) : (
              <BiDislike size={"20px"} />
            )}
          </button>
        </div>
        <button className=" bg-gray-400   m-2 rounded-full py-1 px-4 flex gap-1 items-center justify-center   font-semibold  ">
          <RiShareForwardLine size={"20px"} /> Share
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
