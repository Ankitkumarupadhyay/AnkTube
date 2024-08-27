import React from 'react'
import "../style/head.css"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/sidebarSlice';


const Head = () => {

  const dispatch = useDispatch();

  const handleSidebar = ()=>{
    dispatch(toggleMenu());
  }


  return <div className="header p-2 grid grid-flow-col shadow-xl h-20 items-center ">
    <div className="left flex col-span-1 ">
      <img className='cursor-pointer h-12'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt="menu" onClick={()=> handleSidebar()} />

      <img className='ml-4 h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVorOK17MJVQ05WaY76HxkUGmsoezHyIhxg&s" alt="logo" />
    </div>
    <div className="middile sm:{flex}  text-center col-span-10">
      <input type="text" placeholder='Search' className='border border-black rounded-l-2xl  p-1 px-4 w-1/2'  />
      <button className='p-1 border border-black rounded-r-2xl bg-gray-300 px-2'>Search</button>
    </div>
    <div className="right col-span-1 flex justify-end">
      <img className='cursor-pointer h-12 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="icon" />
    </div>
  </div>
}

export default Head
