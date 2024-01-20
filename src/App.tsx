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
      <MusicPlayerNavbar />
      <SongListHeader />
      <SongList />
      <MusicUploadForm />
    </div>
  )
}

export default App
