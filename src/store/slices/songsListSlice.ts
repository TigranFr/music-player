import { createSlice } from '@reduxjs/toolkit'
import { type ISong } from '../../Interfaces/ISong'
import songs from '../../utils/mockSongs';


interface InitialState {
    songs:ISong[];
}

const initialState:InitialState = {
    songs:songs,
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
