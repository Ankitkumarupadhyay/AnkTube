import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name : "sidebar",
    initialState :{
        isSidebarOpen : false,
    },
    reducers:{
        toggleMenu : (state)=>{
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeMenu : (state)=>{
            state.isSidebarOpen = false;
        }
    }
})

export const {toggleMenu,closeMenu} = sidebarSlice.actions;

export default sidebarSlice.reducer;