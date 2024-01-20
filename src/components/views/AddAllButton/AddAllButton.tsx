import React, { useEffect } from 'react'
import { PlusIcon } from '../../icons'
import { CustomButton } from '../../shared'
import { toast } from 'react-toastify'

const AddAllButton = (): JSX.Element => {
  const handleAddClick = (): void => {
    toast('Successfully added, open console')
    console.log('Success')
  }

  useEffect(() => {
    console.log('rendereee')
  }, [])
  return (
    <CustomButton
      onClick={handleAddClick}
      title="Add All"
      startIcon={<PlusIcon className="icon" />}
    />
  )
}

export default AddAllButton
