import React from 'react';
import { Button as MuiButton } from '@mui/material';

import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <MuiButton variant='contained' onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;
