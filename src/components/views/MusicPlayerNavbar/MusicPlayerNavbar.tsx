import React, { useState } from 'react'
import { AddAllButton, PlayAllButton, TrachNumberButton } from '..'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import {
  setSongs,
  setFilteredSongs,
} from '../../../store/slices/songsListSlice'
import { SearchIcon } from '../../icons'
import './MusicPlayerNavbar.css'

const MusicPlayerNavbar = (): JSX.Element => {
  // State for the input value in the filter
  const [inputValue, setInputValue] = useState<string>('')

  // Redux hooks for dispatch and selecting songs from the store
  const dispatch = useAppDispatch()
  const allSongs = useAppSelector((state) => state.songList.songs)

  // Handle input change event to update the filter
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    setInputValue(value)

    if (value === '') {
      // Reset filter and show all songs if input is empty
      dispatch(setFilteredSongs(null))
      dispatch(setSongs(allSongs))
    } else {
      // Filter songs based on input value
      const filteredSongs = allSongs.filter((song) => {
        return song.songName.toLowerCase().includes(value.toLowerCase())
      })

      // Update filtered songs in the store
      if (filteredSongs.length === 0) {
        dispatch(setFilteredSongs([]))
      } else {
        dispatch(setFilteredSongs(filteredSongs))
      }
    }
  }

  // Handle form submission (prevent default behavior)
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <div className="MusicPlayerHeader">
      <div className="HeaderWrapperOne">
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className="HeaderWrapperTwo">
        <TrachNumberButton />
        <form className="filterForm" onSubmit={handleOnSubmit}>
          <SearchIcon className="icon" />
          <input
            type="text"
            placeholder="Filter"
            value={inputValue}
            onChange={handleOnChange}
            className="filter-input"
          />
        </form>
      </div>
    </div>
  )
}

export default MusicPlayerNavbar
