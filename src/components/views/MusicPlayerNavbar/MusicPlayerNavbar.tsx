import React from 'react'
import { AddAllButton, PlayAllButton, TrachNumberButton } from '..'
import { SearchIcon } from '../../icons'
import './MusicPlayerNavbar.css'

const MusicPlayerNavbar = (): JSX.Element => {

  return (
    <div className="MusicPlayerHeader">
      <div className="HeaderWrapperOne">
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className="HeaderWrapperTwo">
        <TrachNumberButton/>
        <form className="filterForm">
          <SearchIcon className= "icon"/>
          <input type="text" placeholder="Filter" />
        </form>
      </div>
    
    </div>
  )
}

export default MusicPlayerNavbar
