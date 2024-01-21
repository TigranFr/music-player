import React from 'react'
import {type IconProps} from '../../Interfaces/IIcon'


const SortIcon:React.FC<IconProps> = ({ className }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    //   style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
    >
      <path d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"></path>
    </svg>
  )
}

export default SortIcon
