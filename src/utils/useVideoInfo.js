import { useEffect } from "react";
import { API_KEY } from "./constants";
import { useDispatch } from "react-redux";
import { videoList } from "./VideoListSlice";

const useVideoInfo = (category) => {
  const dispatch = useDispatch();
  // const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&order=viewCount&regionCode=IN&key=${API_KEY}`
    );
    const json = await data.json();
    // console.log(json.items)

    // setVideoList(json.items);
    dispatch(videoList(json.items));
  };
  // return videoList;
};

export default useVideoInfo;
