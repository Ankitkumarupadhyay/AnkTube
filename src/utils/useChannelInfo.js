import { useEffect, useState } from "react";

const useChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState("");
  useEffect(() => {
    fetchChannelData();
  });

  const fetchChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
    );
   

    const json = await data.json();
    // console.log(json)

    setChannelInfo(json?.items[0]);
    // console.log(json?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  return channelInfo;
};

export default useChannelInfo;
