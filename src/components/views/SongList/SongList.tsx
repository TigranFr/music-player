import React from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { SongRow } from '../../shared'
import './SongList.css'

const SongList = (): JSX.Element => {
  const songs = useAppSelector(state => state.songList.songs)
  return (
    <div className="songList">
      {songs.length !== 0 ? songs.map((song, index) => (
        <SongRow key={index} song={song} />
      )) : <h1>No results</h1>}
    </div>
  )
}

export default SongList
