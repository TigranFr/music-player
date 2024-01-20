import React from 'react'
import { ArrowDownIcon } from '../../icons'
import './CustomButton.css'

interface CustomButtonProps {
  startIcon?: React.ReactNode
  className?: string
  onClick?: () => void
  title: string | number | null
}

const CustomButton: React.FC<CustomButtonProps> = ({
  startIcon,
  className,
  onClick,
  title,
}) => {
  return (
    <div>
      <button className={`custom-button ${className}`} onClick={onClick}>
        {startIcon !== null && <div className="start-icon">{startIcon}</div>}
        {title}
      </button>
      <div>
        <ArrowDownIcon />
      </div>
    </div>
  )
}

export default CustomButton
