import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getMusicData = createAsyncThunk("MusicDta", async (_, thunkAPI) => {
    axios.get("./data/playlist.json")
        .then(res => {
            thunkAPI.dispatch(addBaseSongs(res.data.playlist))
        })})

const initialState = {
       songs: undefined,
       play: false,
       currentSongID:undefined

  }

export const playistSlice = createSlice({
    name: "playist",
    initialState,
    reducers: {
       addBaseSongs: (state,{payload}) => {
        state.songs = payload
        state.currentSongID = payload[0].id
       },
       toggleSpiel: (state,{payload}) => {
        //avec cette methode play passe de false a true
        state.play =!state.play
       },
       nextSong: (state,{payload}) => {
        // si l index qui suit(donc le song suivamt) egal a la longeur total du tableau(c est a dire le song ki sui est deja a la fin)
        if(payload === state.songs.length){
            state.currentSongID = state.songs[0].id
       }else{
           state.currentSongID = state.songs[payload].id
       }
       },
       previousSong : (state, {payload}) => {
        if(payload < 0){
            state.currentSongID = state.songs[0].id
        }else{
            state.currentSongID = state.songs[payload].id
        }
       },
       changeSong: (state,{payload}) => {
        state.currentSongID = payload
       }
    },
    


    
})



 export const { addBaseSongs, toggleSpiel , nextSong, previousSong, changeSong} = playistSlice.actions
 export default playistSlice.reducer