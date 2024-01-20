import React from 'react'
import { type ISong } from '../../../Interfaces/ISong'
import { ArrowDownIcon } from '../../icons'

interface SongRowProps {
  song: ISong
}

const SongRow = ({song}:SongRowProps): JSX.Element => {

return (
    <div style={{display:'flex' , width:'500px' , justifyContent:'space-between'}}>
      <div>
        <ArrowDownIcon/>
        <ArrowDownIcon/>
      </div>
      <div>
        <p>{song.songName}</p>
      </div>
      <div>
        <p>{song.artistName}</p>
      </div>
      <div>
        <p>{song.trackNumber}</p>
      </div>
      <div>
        <ArrowDownIcon/>
        <ArrowDownIcon/>
        <ArrowDownIcon/>
        <ArrowDownIcon/>
      </div>
    </div>
) 
  
}

export default SongRow
