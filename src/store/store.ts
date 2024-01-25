import { combineReducers, configureStore } from '@reduxjs/toolkit'
import songsListSlice from './slices/songsListSlice'
import fetchedSongsSlice from './slices/fetchedSongsSlice'

const reducer = combineReducers({
  songList: songsListSlice,
  fetchedSong: fetchedSongsSlice,
})

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
