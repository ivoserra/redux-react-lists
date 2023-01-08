import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';


// store is an object that will hold all of our state
// we dont ususally interact with it directly, React-redux library will do that for us
const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});


export { store, reset, addSong, removeSong, addMovie, removeMovie };


