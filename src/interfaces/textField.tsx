import { ChangeEvent } from 'react';

interface ITextFieldProps {
  variant?: 'filled' | 'outlined' | 'standard';
  className?: string;
  mask?: string;
  label?: string;
  fullWidth?: boolean;
  value?: string;
  type?: string;
  error?: boolean;
  helperText?: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default ITextFieldProps;
