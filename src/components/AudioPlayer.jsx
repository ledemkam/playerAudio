import { useRef ,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fillDurationVariables, updateProgress } from "../features/progress"



export default function AudioPlayer() {
 const dispatch = useDispatch()
 const playlist = useSelector(state => state.playlistSlice)
 const audioRef = useRef()

 useEffect(() => {
  if(playlist.songs && playlist.play) {
    audioRef.current.play()
  }
  else {
    audioRef.current.pause()
  }
}, [playlist])

const handloadData = (e) => {
  if(playlist.songs){
    dispatch(fillDurationVariables({
      currentTime: e.target.currentTime,
      totalDuration: e.target.duration
    }))
  }
}

const handleTimeUpdate = (e) => {
  dispatch(updateProgress(e.target.currentTime))
}




  return (
    <audio 
    className="outline-none"
    id="audio-player"    
    src={playlist.songs?.find(song => song.id === playlist.currentSongID).url}
    ref={audioRef}
    onLoadedData={handloadData}
    onTimeUpdate={handleTimeUpdate}
    ></audio>
  )
}