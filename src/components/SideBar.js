import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isOpen = useSelector((store)=> store.app.isSidebarOpen);

  // Early Return
  if(!isOpen) return null;

  return (
    <div className='w-48   border  shadow-2xl py-3 pl-5'>
      <ul className='w-[170px] font-medium border border-b-black rounded-lg'>
        <Link to={"/"}><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold text-lg mt-4'>Subscriptions</h1>
      <ul className='font-medium border border-b-black rounded-lg'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold mt-4 text-lg'>Watch later</h1>
      <ul className='font-medium border border-b-black rounded-lg'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
