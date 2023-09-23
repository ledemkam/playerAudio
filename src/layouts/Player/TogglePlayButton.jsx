import { useDispatch, useSelector } from "react-redux"
import play from "../../assets/play-icon.svg"
import pause from "../../assets/pause-icon.svg"

import { toggleSpiel } from "../../features/playlist"


export default function TogglePlayButton() {
  const dispatch = useDispatch()
  const playlist = useSelector(state => state.playlistSlice)


  return (
    <button onClick={() => dispatch(toggleSpiel())}
      className="bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none">
     
      <img src={playlist.play ? pause : play} alt="play" className="w-20 h-20" />
    </button>
  )
}
