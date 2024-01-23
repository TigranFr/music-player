import React from 'react'
import { toast } from 'react-toastify'
import { PlayIcon } from '../../icons'
import { CustomButton } from '../../shared'

const PlayAllButton = (): JSX.Element => {

  const handleAddClick = (): void => {
    toast.success('Successfully played, open console',{
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      pauseOnHover:false      
    })
    console.log('Successfully played');
  }

  return (
    <CustomButton 
      title="Play All" 
      startIcon={<PlayIcon className="icon" />} 
      onClick={handleAddClick}
    />

  )
}

export default PlayAllButton
