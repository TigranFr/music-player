import React from 'react'
import showToast from '../../../utils/toast'
import { PlayIcon } from '../../icons'
import { CustomButton } from '../../shared'

const PlayAllButton = (): JSX.Element => {
  const handleAddClick = (): void => {
    showToast('Successfully played, open console')
    console.log('Successfully played')
  }

  return (
    <CustomButton
      title="Play All"
      startIcon={<PlayIcon className="icon" />}
      handleClick={handleAddClick}
    />
  )
}

export default PlayAllButton
