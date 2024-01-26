import React from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { type Song } from '../../../Interfaces/Song'
import { SongRow, NoData } from '../../shared'
import './SongList.css'

const SongList = (): JSX.Element => {
  const songs = useAppSelector((state) => state.songList.songs)
  const filteredSongs = useAppSelector((state) => state.songList.filteredSongs)
  return (
    <div className="songList">
      {filteredSongs === null ? (
        songs?.map((song: Song, index: React.Key | null | undefined) => (
          <SongRow key={index} song={song} />
        ))
      ) : filteredSongs?.length === 0 ? (
        <NoData />
      ) : (
        filteredSongs?.map((song, index) => <SongRow key={index} song={song} />)
      )}
    </div>
  )
}

export default SongList
