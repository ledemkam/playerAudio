import { configureStore } from "@reduxjs/toolkit";
import  playlistSlice  from "./features/playlist";
import progressSlice  from "./features/progress";

export const store =  configureStore({
    reducer: {
       playlistSlice,
       progressSlice
    }
})