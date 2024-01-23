import React from 'react'
import { PlusIcon } from '../../icons'
import { CustomButton } from '../../shared'
import { toast } from 'react-toastify'

const AddAllButton = (): JSX.Element => {

  const handleAddClick = (): void => {
    toast.success('Successfully added, open console' ,{
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      pauseOnHover:false      
    })
    console.log('Successfully added')
  }

  return (
    <CustomButton
      onClick={handleAddClick}
      title="Add All"
      startIcon={<PlusIcon className="icon" />}
    />
  )
}

export default AddAllButton
