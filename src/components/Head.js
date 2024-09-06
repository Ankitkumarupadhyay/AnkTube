import React, { useEffect, useState } from "react";
import "../style/head.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { YT_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { videoList } from "../utils/VideoListSlice";
import { CiSearch } from "react-icons/ci";

const Head = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuerry]) {
        setSuggestions(searchCache[searchQuerry]);
        // console.log(suggestions)
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerry]);

  const getSuggestions = async () => {
    // console.log("API call -" + searchQuerry);
    const data = await fetch(YT_SUGGESTION_API + searchQuerry);
    const json = await data.json();

    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuerry]: json[1],
      })
    );
  };
  // console.log(suggestions)

  const handleSearchClick = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuerry}&regionCode=IN&order=viewCount&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
    );

    const json = await data.json();
    // console.log(json);
    dispatch(videoList(json.items));
  };
  const handleSuggestionClick = async (e) => {
    console.log(e);
    setSearchQuerry(e);
    // const data = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuerry}&regionCode=IN&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
    // );

    // const json = await data.json();
    // // console.log(json);
    // dispatch(videoList(json.items));
  };

  const handleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="header sticky z-50 bg-white top-0 p-2 grid grid-flow-col shadow-xl h-20 pt-5 ">
      <div className="left flex col-span-1 ">
        <img
          className="cursor-pointer h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          alt="menu"
          onClick={() => handleSidebar()}
        />

        <img
          className="ml-4 h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVorOK17MJVQ05WaY76HxkUGmsoezHyIhxg&s"
          alt="logo"
        />
      </div>
      <div className="middile col-span-10 ">
        <div className=" sm:{flex} h-[35px]  items-center   text-center   ">
          <input
            type="text"
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
            placeholder="Search"
            className="border h-[35px] border-black rounded-l-2xl   px-4 w-1/2"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            onClick={() => handleSearchClick()}
            className=" relative top-[10px]  px-4 border h-[35px] border-black rounded-r-2xl bg-gray-300 "
          >
            <CiSearch size="24px" />
          </button>
        </div>
        {showSuggestions && (
          <div className="     pl-[22%]">
            <ul className="bg-white   w-[64%]  py-2 rounded-xl shadow-xl border border-gray-300  ">
              {suggestions.map((e) => (
                <li
                  key={e}
                  className="py-1 pl-5 hover:bg-gray-100 cursor-pointer shadow-sm"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="right col-span-1 flex justify-end">
        <img
          className="cursor-pointer h-12 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Head;
