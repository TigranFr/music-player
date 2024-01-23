import { createSlice } from '@reduxjs/toolkit'
import { type ISong } from '../../Interfaces/ISong'


interface InitialState {
    song:ISong;
}

const initialState:InitialState = {
    song:{
        id:0,
        songName: 'Unknown',
        artistName: 'Unknown',
        trackNumber:0
    }
}
const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers:{
    addSong: (state , action) => {
        state.song.id = action.payload.id;
        state.song.songName = action.payload.songName;
        state.song.artistName = action.payload.artistName;
        state.song.trackNumber = action.payload.trackNumber
    }
  }
});


export const {addSong} = songListSlice.actions
export default songListSlice.reducer

