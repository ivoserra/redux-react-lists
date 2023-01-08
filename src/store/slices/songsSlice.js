import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions.js';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers:{
        // template 'song' + 'addSong' = 'song/addSong'
        addSong: (state, action) => {
            // state is a piece of state managed by this reducer and not the Big state Object
            state.push(action.payload);
        },
        removeSong: (state, action) => {
            // we use immer library to make sure we dont mutate the state
            const index = state.indexOf(action.payload);
            //console.log('index', index)
            state.splice(index, 1);
        }
    },
    extraReducers: (builder)=>{
        /* builder.addCase("movie/reset", (state, action) =>{
            return []; */
            // this listens to the reset of the movieslice and resets it self
       /*  builder.addCase(moviesSlice.actions.reset, (state, action) =>{
            return [];
        }) */
        builder.addCase(reset, (state, action)=>{
            return [];
        })
    }
});


export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;