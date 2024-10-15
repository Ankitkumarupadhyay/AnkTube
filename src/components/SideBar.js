import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserRectangleBold } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { CiYoutube } from "react-icons/ci";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoMdTrendingUp } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateLight } from "react-icons/pi";
import { ImConnection } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { SlTrophy } from "react-icons/sl";
import { MdPodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import '../style/scroll.css'




const SideBar = () => {
  
  const isOpen = useSelector((store) => store.app.isSidebarOpen);

 

  // Early Return
  if (!isOpen) return null;

  return (
    <div className="scrollDiv w-48 pb-10 z-30 bg-white fixed h-[90vh] left-0 overflow-y-scroll   border  shadow-2xl py-3 ">
      <ul className="w-[170px]  font-medium border-b border-b-black pl-2 ">
        <Link to={"/"}>
          <li  className="flex items-center gap-3 text-[16px] m-2">
            <MdOutlineHome size="24px" /> Home
          </li>
        </Link>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3  m-2">
          <SiYoutubeshorts size="24px" /> Shorts
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <MdOutlineSubscriptions size="24px" /> Subscriptions
        </li>
      </ul>
      <h1 className="font-bold pl-2 text-lg mt-4">You </h1>
      <ul className="font-medium border-b pl-2 border-b-black">
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <PiUserRectangleBold size="24px" /> Your channel
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <FaHistory size="24px" />
          History{" "}
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <CgPlayList size="24px" />
          Playlists{" "}
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <CiYoutube size="24px" />
          Your videos{" "}
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <MdLightbulbOutline size="24px" />
          Your courses{" "}
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <MdOutlineWatchLater size="24px" />
          Watch later{" "}
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <BiLike size="24px" />
          Liked videos{" "}
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <LiaDownloadSolid size="24px" />
          Downloads{" "}
        </li>
      </ul>

      <h1 className="font-bold pl-2 mt-4 text-lg">Explore</h1>
      <ul className="font-medium border-b pl-2 border-b-black ">
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <IoMdTrendingUp size="24px" />
          Trending
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <FiShoppingBag size="24px" />
          Shopping
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <IoMusicalNoteOutline size="24px" />
          Music
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <PiFilmSlateLight size="24px" />
          Movies
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <ImConnection size="24px" />
          Live
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <SiYoutubegaming size="24px" />
          Gaming
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <ImNewspaper size="24px" />
          News
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <SlTrophy size="24px" />
          Sports
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <MdLightbulbOutline size="24px" />
          Courses{" "}
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <MdPodcasts size="24px" />
          Podcasts
        </li>
      </ul>

      <ul className="font-medium  border-b pl-2 border-b-black ">
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <IoSettingsOutline size="24px" />
          Settings
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <MdOutlineOutlinedFlag size="24px" />
          Report history
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <IoIosHelpCircleOutline size="24px" />
          Help
        </li>
        <li className="cursor-pointer flex items-center gap-3 text-[16px] my-3 m-2">
          <MdOutlineFeedback size="24px" />
          Send feedback
        </li>
      </ul>
      <p className="pt-4  px-5 text-[13px] text-[#AAAAAA] font-medium "><span className="cursor-pointer">About Press Copyright Contact us Creators Advertise Developers</span></p>
      <p className="pt-4 px-5 text-[13px]  text-[#AAAAAA] font-medium"><span className="cursor-pointer">Terms Privacy Policy & Safety How YouTube works Test new features</span></p>
      <p className="pt-2 pl-3 text-[13px] flex items-center gap-1  text-[#AAAAAA] font-medium"><MdCopyright/>  <a className="text-black underline " target='blank' href="https://www.linkedin.com/in/ankit-kumar-upadhyay-5005b3244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Ankit Kumar Upadhyay</a> </p>
    </div>
  );
};

export default SideBar;
