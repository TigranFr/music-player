import React from 'react'
import { PlusIcon } from '../../icons'
import { CustomButton } from '../../shared'
import showToast from '../../../utils/toast'

const AddAllButton = (): JSX.Element => {
  const handleAddClick = (): void => {
    showToast('Successfully added, open console')
    console.log('Successfully added')
  }

  return (
    <CustomButton
      handleClick={handleAddClick}
      title="Add All"
      startIcon={<PlusIcon className="icon" />}
    />
  )
}

export default AddAllButton
