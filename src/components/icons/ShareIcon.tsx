import React from 'react'
import { type IconProps } from '../../Interfaces/IIcon'

interface IStyles {
  transform: string
  msFilter: string
}


const ShareIcon: React.FC<IconProps> = ({ className }): JSX.Element => {
  
  const styles: IStyles = {
    transform: 'scaleX(-1)',
    msFilter:
      'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={styles}
      className={className}
    >
      <path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z"></path>
    </svg>
  )
}

export default ShareIcon
