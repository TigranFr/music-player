import { createSlice } from '@reduxjs/toolkit'
import { type Song } from '../../Interfaces/Song'
import generateFakeResponse from '../../utils/fakeBackendData'

const fakeSong = generateFakeResponse()
console.log(fakeSong)

interface InitialState {
  song: Song
}

const initialState: InitialState = {
  song: fakeSong,
}

console.log(initialState.song)

const fakeSongSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {},
})

export default fakeSongSlice.reducer
