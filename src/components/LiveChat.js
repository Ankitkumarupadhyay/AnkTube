import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const LiveChat = () => {
 
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${searchParams.get(
        "v"
      )}&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
    );

    const json = await data.json();

    setComments(json?.items);
  };
 
  if (comments.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="px-2  border border-red-700 overflow-hidden h-[100%] ">
      <h1 className="font-bold text-xl my-5 ">Comments : </h1>
      {comments.map((comment) => (
        <div key={comment.id} className="w-full rounded-lg my-1 items-center pl-3 flex bg-slate-200 p-2 ">
        {/* {console.log(comment)} */}
          <img
            className="cursor-pointer rounded-lg h-12 "
            src={
              comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
            }
            alt="icon"
          />
          <span className="font-bold px-3 ">
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis ">
            {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LiveChat;
