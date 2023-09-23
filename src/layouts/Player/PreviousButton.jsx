import previousIcon from "../../assets/prev-icon.svg"
import { useDispatch,useSelector } from "react-redux"
import { previousSong } from "../../features/playlist";


export default function PreviousButton() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlistSlice);

  function handleClick(){
    if(playlist.songs) {
      //-1 c est l index precendent,donc le song precedent
      const previousIndex = playlist.songs.findIndex(song => song.id === playlist.currentSongID) - 1
      dispatch(previousSong(previousIndex))
    }
  }

  return (
    <button 
    onClick={handleClick}
    className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center">
    <img src={previousIcon} alt="prev" className="w-4 h-4"/>

    </button>
  )
}