import React from 'react'
import { PlusIcon } from '../../icons'
import { CustomButton } from '../../shared'

const PlayAllButton = (): JSX.Element => {
  return <CustomButton title="Play All" startIcon={<PlusIcon className="icon" />}/>
}

export default PlayAllButton
