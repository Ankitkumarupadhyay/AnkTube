import { createSlice } from "@reduxjs/toolkit";


const VideoListSlice = createSlice({
    name : "videoList",
    initialState : {
        allVideos : [],
    },
    reducers : {
        videoList : (state,action)=>{
            
           
            state.allVideos = action.payload;
            // console.log(state.allVideos)
        }
    }
})

export const { videoList } = VideoListSlice.actions

export default VideoListSlice.reducer