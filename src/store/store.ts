import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsListSlice from "./slices/songsListSlice";
import uploadFormSlice from "./slices/uploadFormSlice";

const reducer = combineReducers({
    songList: songsListSlice,
    uploadForm : uploadFormSlice
})

export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch