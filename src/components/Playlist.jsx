import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { changeSong, getMusicData } from "../features/playlist";


export default function Playlist() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlistSlice);

  useEffect(() => {
    dispatch(getMusicData());
  },[])
 
return <ul className="mt-4 pb-[300px]">
             { playlist?.songs?.length && playlist.songs.map(({id,title,artist}) => (
                <li key={id}
                 onClick={()=>dispatch(changeSong(id))}
                 className="p-2 border-2 font-semibold bg-indigo-100 hover:bg-indigo-200 text-slate-800 mb-3 rounded cursor-pointer">
                <span>{title}</span>
                <span>{artist}</span>
           </li>
             ))}
         </ul>
}

