import React from 'react';
import { createRandomSong } from "../data";
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from '../store';

const SongPlaylist = () => {
  const dispatch = useDispatch();

   // const songPlaylist = useSelector((state) => state.songs);
   const songPlaylist = useSelector((state) => {
    //console.log('state', state);
    return state.songs;
  });

  console.log(songPlaylist)

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  }

  const renderedSongs = songPlaylist.map((song)=>{
    return(
      <li key={song}>
      {song}
      <button
        onClick={() => handleSongRemove(song)}
        className="button is-danger"
      >
        X
      </button>
    </li>

    )
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
