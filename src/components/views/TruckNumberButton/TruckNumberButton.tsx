import React from 'react';
import { SortIcon } from '../../icons';
import { CustomButton } from '../../shared';
import './TruckNumberButton.css';

const TruckNumberButton = (): JSX.Element => {
  return (
    <CustomButton
      className="third"
      title="Truck Number"
      startIcon={<SortIcon className="icon" />}
    />
  );
};

export default TruckNumberButton;
