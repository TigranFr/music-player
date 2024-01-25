import React from 'react'
import { type IconProps } from '../../Interfaces/IIcon'

const DetailedIcon: React.FC<IconProps> = ({ className }): JSX.Element => {
  return (
    <svg
      fill="#000000"
      width="24px"
      height="24px"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M100,60.0001a8,8,0,1,1-8-8A8.00008,8.00008,0,0,1,100,60.0001Zm64,8a8,8,0,1,0-8-8A8.00008,8.00008,0,0,0,164,68.0001Zm-72,52a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,92,120.0001Zm72,0a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,164,120.0001Zm-72,68a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,92,188.0001Zm72,0a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,164,188.0001Z" />
    </svg>
  )
}

export default DetailedIcon
