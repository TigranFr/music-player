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
        },
        {
          id:3,
          songName:"Twin Flames",
          artistName:"Blackbird Blackbird",
          trackNumber:3
        },
        {
          id:4,
          songName:"Left to Hurt",
          artistName:"Blackbird Blackbird",
          trackNumber:4
        },
        {
          id:5,
          songName:"Starlight",
          artistName:"Blackbird Blackbird",
          trackNumber:5
        },
        {
          id:6,
          songName:"Modern Disbelief",
          artistName:"Blackbird Blackbird",
          trackNumber:6
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
