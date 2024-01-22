import React from 'react'
import { type ISong } from '../../../Interfaces/ISong'
import './SongRow.css'
import {
  ArrowDownIcon,
  DetailedIcon,
  HeartIcon,
  PlayIcon,
  ShareIcon,
  CheckIcon,
} from '../../icons'

interface SongRowProps {
  song: ISong
}

const SongRow = ({ song }: SongRowProps): JSX.Element => {
  return (
    <div
      className="song-row"
    >
      <div className='song-row-item icons-block-one'>
        <DetailedIcon />
        <PlayIcon />
      </div>
      <div className='song-row-item'>
        <p>{song.songName}</p>
      </div>
      <div className='song-row-item'>
        <p>{song.artistName}</p>
      </div>
      <div className='song-row-item trackNumber'>
        <p>{song.trackNumber}</p>
      </div>
      <div className='song-row-item icons-block-two'>
        <HeartIcon />
        <CheckIcon />
        <ShareIcon />
        <ArrowDownIcon />
      </div>
    </div>
  )
}

export default SongRow
