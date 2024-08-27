import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";


const store= configureStore({
    reducer : {
        app : sidebarSlice,
    }
})

export default store ;