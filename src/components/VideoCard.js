import React from "react";
import { timeAgo } from "../utils/time";
import useChannelInfo from "../utils/useChannelInfo";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, localized, thumbnails, publishedAt, channelId } =
    snippet;
    // console.log(channelId)

  // const channelInfo = useChannelInfo(channelId);
  // console.log(channelInfo)

  return (
    <div className="p-3 m-3 mx-auto w-[290px]  sm:w-[350px]   shadow-xl">
      <img
        className="rounded-xl h-[183px] bg-gray-400"
        src={thumbnails?.maxres?.url || thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="w-[100%]  flex ">
        <div className="py-3 mr-1  w-14   ">
          <img
            className="cursor-pointer object-cover rounded-full mx-0 h-12 w-12 "
            src={
              // channelInfo?.snippet?.thumbnails?.default?.url ||
              thumbnails?.medium?.url ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
            }
            alt="icon"
          />
        </div>
        <div className="w-[280px] overflow-hidden">
          <h4 className=" pt-3 font-semibold sm:font-bold ">
            {localized?.title}
          </h4>
          <h2 className="pt-2">{channelTitle}</h2>
          <h2 className="inline-block">
            {statistics?.viewCount / 1000000 >= 1
              ? `${(statistics?.viewCount / 1000000).toPrecision(2)}M views`
              : `${(statistics?.viewCount / 1000).toFixed(0)}K views`}
          </h2>
          <h2 className="inline-block font-bold px-2 text-[32px] leading-[0px] relative bottom-1 ">
            .
          </h2>
          <h2 className="inline-block">{timeAgo(publishedAt)}</h2>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
