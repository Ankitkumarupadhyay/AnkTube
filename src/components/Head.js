import React, { useEffect, useState } from "react";
import "../style/head.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { YT_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

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
    console.log("API call -" + searchQuerry);
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
        <div className=" sm:{flex}   text-center   ">
          <input
            type="text"
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
            placeholder="Search"
            className="border border-black rounded-l-2xl  p-1 px-4 w-1/2"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-1 border border-black rounded-r-2xl bg-gray-300 px-2">
            Search
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
