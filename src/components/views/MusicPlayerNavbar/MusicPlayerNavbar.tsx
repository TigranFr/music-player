import React, { useEffect } from 'react'
import { CustomButton } from '../../shared'
import AddAllButton from '../AddAllButton/AddAllButton'
import PlayAllButton from '../PlayAllButton/PlayAllButton'

import './MusicPlayerNavbar.css'

const MusicPlayerNavbar = (): JSX.Element => {
  useEffect(() => {
    console.log('heeeeeeeeeey')
  }, [])
  return (
    <div style={{ display: 'flex', backgroundColor: 'gray' }}>
      <PlayAllButton />
      <AddAllButton />
      <CustomButton title="Trach Num..." />
      <input type="search" placeholder="Filter" />
    </div>
  )
}

export default MusicPlayerNavbar
