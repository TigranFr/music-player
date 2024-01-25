import React from 'react'
import './SongListHeader.css'

const SongListHeader = (): JSX.Element => {
  return (
    <div className="song-list-header">
      <div className="songListHeader-block empty-div-one"></div>
      <div id="div1" className="songListHeader-block">
        <p className="songListHeader-block-item">Song Name</p>
      </div>
      <div className="songListHeader-block">
        <p className="songListHeader-block-item">Artist Name</p>
      </div>
      <div className="songListHeader-block">
        <p className="songListHeader-block-item">Track</p>
      </div>
      <div className="songListHeader-block empty-div-two"></div>
    </div>
  )
}

export default SongListHeader
