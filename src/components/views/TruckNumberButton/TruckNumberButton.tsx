import React from 'react'
import { SortIcon } from '../../icons'
import { CustomButton } from '../../shared'

const TruckNumberButton = (): JSX.Element => {
  return (
    <CustomButton
      className="truck-number-button"
      title="Truck Number"
      startIcon={<SortIcon className="icon" />}
    />
  )
}

export default TruckNumberButton
