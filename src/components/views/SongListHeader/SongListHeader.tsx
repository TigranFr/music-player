import React from 'react'
import './SongListHeader.css';

const SongListHeader = (): JSX.Element => {
  return (
    <div
      className='song-list-header'
    >
      <div className='songListHeader-block empty-div-one'></div>
      <div className='songListHeader-block'>
        <p>Song Name</p>
      </div>
      <div className='songListHeader-block'>
        <p>Artist Name</p>
      </div>
      <div className='songListHeader-block'>
        <p>Track</p>
      </div>
      <div className='songListHeader-block empty-div-two'></div>
    </div>
  )
}

export default SongListHeader
