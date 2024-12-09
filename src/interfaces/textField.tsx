import { ChangeEvent } from 'react';

interface ITextFieldProps {
  variant?: 'filled' | 'outlined' | 'standard';
  // helperText?: string | null;
  className?: string;
  // value?: string | number;
  // label?: string;
  // type?: string;
  mask?: string;
  // name?: string;
  // multiline?: boolean;
  // fullWidth?: boolean;
  // error?: boolean;
  // rows?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default ITextFieldProps;
