import { createSlice } from '@reduxjs/toolkit'
import { type ISong } from '../../Interfaces/ISong'

interface InitialState {
    songs:ISong[];
}

const initialState:InitialState = {
    songs:[
        {
            id:1,
            songName:"Halo",
            artistName:"Blackbird Blackbird",
            trackNumber:1
        },
        {
            id:2,
            songName:"Blind",
            artistName:"Blackbird Blackbird",
            trackNumber:2
        }
    ]
}
const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload
    },
    // Add other song-related actions as needed
  },
})

export const { setSongs } = songListSlice.actions
export default songListSlice.reducer
