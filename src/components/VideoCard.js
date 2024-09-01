import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info)
  const { snippet, statistics } = info;
  const { channelTitle, localized, thumbnails } = snippet;
  return (
    <div className="p-3 m-3 mx-auto font-medium   w-80   shadow-xl">
      <img
        className="rounded-xl"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <h4 className="whitespace-nowrap py-3 font-bold overflow-hidden text-ellipsis">
        {localized?.title}
      </h4>
      <h2>{channelTitle}</h2>
      <h2>
        {statistics?.viewCount / 1000000 >= 1
          ? `${(statistics?.viewCount / 1000000).toPrecision(2)}M views`
          : `${(statistics?.viewCount / 1000).toFixed(0)}K views`}
      </h2>
    </div>
  );
};

export default VideoCard;
