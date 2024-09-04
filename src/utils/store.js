import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import VideoListSlice from "./VideoListSlice";


const store= configureStore({
    reducer : {
        app : sidebarSlice,
        search : searchSlice,
        videoList : VideoListSlice,
    }
})

export default store ;