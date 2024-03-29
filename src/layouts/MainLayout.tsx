import React from 'react'
import { ToastContainer } from 'react-toastify'
import {
  MusicPlayerNavbar,
  SongListHeader,
  SongList,
  MusicUploadForm,
} from '../components/views'
import './MainLayout.css'

const MainLayout = (): JSX.Element => {
  return (
    <div className="layout">
      <MusicPlayerNavbar />
      <SongListHeader />
      <SongList />
      <MusicUploadForm />
      <ToastContainer />
    </div>
  )
}

export default MainLayout
