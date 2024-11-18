import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface IButtonProps extends ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default IButtonProps;
