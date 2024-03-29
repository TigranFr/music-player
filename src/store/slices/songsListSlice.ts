import { createSlice } from '@reduxjs/toolkit'
import { type Song } from '../../Interfaces/Song'
import songs from '../../utils/mockSongs'

interface InitialState {
  songs: Song[]
  filteredSongs: Song[] | null
}

const initialState: InitialState = {
  songs: songs,
  filteredSongs: null,
}
const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload
    },
    addSong: (state, action) => {
      state.songs = [...state.songs, action.payload]
    },
    setFilteredSongs: (state, action) => {
      state.filteredSongs = action.payload
    },
  },
})

export const { setSongs, addSong, setFilteredSongs } = songListSlice.actions
export default songListSlice.reducer
