import React from 'react';
import { ArrowDownIcon } from '../../icons';
import classNames from 'classnames';
import './CustomButton.css';

interface CustomButtonProps {
  startIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title: string | number | null;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  startIcon,
  className,
  onClick,
  title,
}) => {

  const arrowClasses = classNames('arrow-down', className);

  return (
    <div className="custom-button-wrapper">
      <button  className="custom-button" onClick={onClick}>
        {startIcon !== null && <div className="start-icon">{startIcon}</div>}
        {title !== null && <p className="button-title">{title}</p>}
      </button>
      <div className={arrowClasses}>
        <ArrowDownIcon className="icon" />
      </div>
    </div>
  );
};

export default CustomButton;
