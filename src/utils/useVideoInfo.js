import  { useState,useEffect } from 'react'
import { YOUTUBE_API } from './constants';

const useVideoInfo = () => {
  const [videoList,setVideoList]=useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    setVideoList(json.items);
  };
  return videoList;
}

export default useVideoInfo
