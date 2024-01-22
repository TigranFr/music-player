import React from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { SongRow } from '../../shared'
import './SongList.css'

const SongList = (): JSX.Element => {
  const songs = useAppSelector(state => state.songList.songs)
  return (
    <div className="songList">
      {songs.map((song, index) => (
        <SongRow key={index} song={song} />
      ))}
    </div>
  )
}

export default SongList
