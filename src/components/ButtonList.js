import React from "react";
import '../style/scroll.css'
import { useDispatch } from "react-redux";
import { videoList } from "../utils/VideoListSlice";

const ButtonList = () => {
  const dispatch = useDispatch();
  const buttonNameList = [
    "All",
    "Cricket",
    "Coding",
    "ReactJS",
    "song",
    "Trending",
    "Entertainment",
    "javaScript",
    "Gaming",
    "Cooking",
  ];
  const handleButtonClick = async (button) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${button}&regionCode=IN&order=viewCount&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
    );

    const json = await data.json();
    // console.log(json);
    dispatch(videoList(json.items));
  };

  return (
    <div className="flex w-[95vw]  overflow-x-scroll ">
      {buttonNameList.map((button) => (
        <span
        onClick={()=> handleButtonClick(button)}
          key={button}
          className="sm:px-5 cursor-pointer px-2 font-medium sm:py-2 py-1 bg-gray-300 sm:my-5 my-3 sm:mx-3 mx-1 rounded-xl"
          
        >
          {button}
        </span>
      ))}
    </div>
  );
};

export default ButtonList;
