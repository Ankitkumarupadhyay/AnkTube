import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videoList,setVideoList]=useState([])

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    setVideoList(json.items)
  }

  if(videoList.length ===0) return <h1>loading</h1>

  return (
    <div className='flex flex-wrap  '>
      {
        videoList.map((video)=>(
         <Link to={"/watch?v=" + video.id} className='mx-auto' key={video?.id} ><VideoCard  info={video} /></Link> 
        ))
      }
      
    </div>
  )
}

export default VideoContainer
