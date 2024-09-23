import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CommentSection = () => {
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

  // const updateComment = (event) => {
  //   setComments([...newComment, ...comments]);

  // };
  if (comments === undefined) return <h1>Loading...</h1>;

  if (comments.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="px-2   overflow-y-scroll h-[100%] ">
      <h1 className="font-bold text-xl my-5 ">Comments : </h1>
      {/* <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg border-gray-500 px-2 py-1 m-2 "
      />
      <input
        type="text"
        placeholder="Add a new comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="border rounded-lg border-gray-500 px-2 py-1 m-2 "
      />
      <button
        onClick={() => updateComment()}
        disabled={true}
        className="bg-slate-300 px-4 rounded-xl py-1"
      >
        Send
      </button> */}

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="w-full rounded-lg my-1 items-center pl-3 flex bg-slate-200 p-2 "
        >
          {/* {console.log(comment)} */}
          <img
            className="cursor-pointer rounded-full h-12 "
            src={
              comment?.snippet?.topLevelComment?.snippet
                ?.authorProfileImageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
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

export default CommentSection;
