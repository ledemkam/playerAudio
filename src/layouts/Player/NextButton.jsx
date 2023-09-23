import nextIcon from "../../assets/next-icon.svg"
import { useDispatch,useSelector } from "react-redux"
import { nextSong } from "../../features/playlist";


export default function NextButton() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlistSlice);

  function handleClick(){
    if(playlist.songs) {
      //+ 1 c est l index qui suit ,donc le song suivant
      const nextIndex = playlist.songs.findIndex(song => song.id === playlist.currentSongID ) + 1
      dispatch(nextSong(nextIndex))
    }
  }

  return (
    <button 
    onClick={handleClick}
    className="w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center">
    <img src={nextIcon} className="w-5 h-5" alt="next" />
    </button>
  )
}