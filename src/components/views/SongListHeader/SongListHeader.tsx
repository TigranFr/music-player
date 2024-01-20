import React from 'react'

const SongListHeader = (): JSX.Element => {
  return (
    <div
      style={{ display: 'flex', marginTop: '20px', backgroundColor: 'gray' }}
    >
      <div></div>
      <div>Song Name</div>
      <div>Artist Name</div>
      <div>Track</div>
      <div></div>
    </div>
  )
}

export default SongListHeader
