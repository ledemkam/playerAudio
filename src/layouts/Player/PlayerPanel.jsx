import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux"
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import TogglePlayButton from "./TogglePlayButton";
import Progress from "./Progress";


export default function PlayerPannel() {
const dispatch = useDispatch();
const playlist = useSelector((state) => state.playlistSlice);
const audio = useRef()
const aktuelTitel = playlist.songs?.find(song => song.id === playlist.currentSongID)

  return (
    <div className="fixed w-full bottom-0 rounded border-t-2 border-gray-800 p-6 bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="max-w-[800px] mx-auto mb-2">
        <p className="text-xl text-slate-800 font-semibold">
          {playlist.songs && aktuelTitel.title}
        </p>
        <div className="flex justify-between">
          <p className="text-lg text-gray-900">
            {playlist.songs && aktuelTitel.artist}
          </p>
          <p className="text-lg text-gray-900">
             {playlist.songs?.findIndex(song => song.id === playlist.currentSongID) + 1}      /{playlist.songs?.length}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
           <PreviousButton/>
              <TogglePlayButton/>
           <NextButton/>
      </div>
          <Progress/>
    </div>
  )
}
