import { ChangeEvent } from 'react';

interface ITextFieldProps {
  variant?: 'filled' | 'outlined' | 'standard';
  className?: '';
  mask?: string;
  label?: string;
  fullWidth?: boolean;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default ITextFieldProps;
