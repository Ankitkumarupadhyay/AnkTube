import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const SideBar = () => {
  const isOpen = useSelector((store) => store.app.isSidebarOpen);

  // Early Return
  if (!isOpen) return null;

  return (
    <div className="w-48 z-30 bg-white fixed h-[100vh] left-0 overflow-y-scroll   border  shadow-2xl py-3 pl-5">
      <ul className="w-[170px]  font-medium border border-b-black rounded-lg">
        <Link to={"/"}>
          <li className="flex items-center gap-3 text-[16px] m-2" ><MdOutlineHome size="24px" /> Home</li>
        </Link>
        <li className="flex items-center gap-3 text-[16px] m-2"><SiYoutubeshorts size="24px"/> Shorts</li>
        <li className="flex items-center gap-3 text-[16px] m-2"><MdOutlineSubscriptions size="24px"/> Subscriptions</li>
        
      </ul>
      <h1 className="font-bold text-lg mt-4">Subscriptions</h1>
      <ul className="font-medium border border-b-black rounded-lg">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold mt-4 text-lg">Watch later</h1>
      <ul className="font-medium border border-b-black rounded-lg">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-4 text-lg">Watch later</h1>
      <ul className="font-medium border border-b-black rounded-lg">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-4 text-lg">Watch later</h1>
      <ul className="font-medium border border-b-black rounded-lg">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-4 text-lg">Watch later</h1>
      <ul className="font-medium border border-b-black rounded-lg">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
