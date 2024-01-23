import React from 'react'
import {
  MusicPlayerNavbar,
  SongListHeader,
  SongList,
  MusicUploadForm,
} from '../components/views'
import './MainLayout.css'

const layout = ():JSX.Element => {
  return (
    <div className='layout'>
      <MusicPlayerNavbar />
      <SongListHeader />
      <SongList />
      <MusicUploadForm />
     
    </div>
  )
}

export default layout
