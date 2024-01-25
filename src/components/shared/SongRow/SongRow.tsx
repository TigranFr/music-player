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
    <div className="song-row">
      <div className="song-row-item icons-block-one">
        <DetailedIcon className="icon" />
        <PlayIcon className="icon" />
      </div>
      <div className="song-row-item song-name">
        <p className="song-text">{song.songName}</p>
      </div>
      <div className="song-row-item artist-name">
        <p className="song-text">{song.artistName}</p>
      </div>
      <div className="song-row-item track-number">
        <p className="song-text">{song.trackNumber}</p>
      </div>
      <div className="song-row-item icons-block-two">
        <HeartIcon className="icon" />
        <CheckIcon className="icon" />
        <ShareIcon className="icon" />
        <ArrowDownIcon className="icon" />
      </div>
    </div>
  )
}

export default SongRow
