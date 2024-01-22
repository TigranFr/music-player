import React from 'react'
import './App.css'
import {
  MusicPlayerNavbar,
  MusicUploadForm,
  SongList,
  SongListHeader,
} from './components/views/index'

function App(): JSX.Element {
  return (
    <div className="App">
      <MusicPlayerNavbar data-testid="music-player-navbar"/>
      <SongListHeader data-testid="song-list-header" />
      <SongList data-testid="song-list" />
      <MusicUploadForm data-testid="music-upload-form" />
    </div>
  )
}

export default App
