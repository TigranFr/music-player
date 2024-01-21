import React from 'react'
import { SortIcon } from '../../icons'
import { CustomButton } from '../../shared'
import './TrachNumberButton.css'

const TrachNumberButton = ():JSX.Element => {
  return (
    <CustomButton className="third" title="Truck Num..."  startIcon={<SortIcon className="icon"/>}/>
  )
}

export default TrachNumberButton;