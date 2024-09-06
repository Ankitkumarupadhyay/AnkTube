import React from "react";

const ButtonList = () => {
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

  return (
    <div className="flex w-[95vw]  overflow-x-scroll ">
      {buttonNameList.map((button) => (
        <span
          key={button}
          className="sm:px-5 px-2 font-medium sm:py-2 py-1 bg-gray-300 sm:my-5 my-3 sm:mx-3 mx-1 rounded-xl"
          
        >
          {button}
        </span>
      ))}
    </div>
  );
};

export default ButtonList;
