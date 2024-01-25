import React from 'react'
import { type IconProps } from '../../Interfaces/IIcon'

const ArrowDownIcon: React.FC<IconProps> = ({ className }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="m11.998 17 7-8h-14z"></path>
    </svg>
  )
}

export default ArrowDownIcon
