import { TextField } from '@mui/material';

import { ITextFieldProps } from '../../interfaces';

const TextFieldComponent: React.FC<ITextFieldProps> = (props) => {
  const { variant = 'outlined', helperText, error } = props;

  return (
    <TextField
      className={`general-textfield ${props.className ? props.className : ''}`}
      variant={variant}
      // helperText={helperText}
      // error={!!error}
      {...props}
    />
  );
};

export default TextFieldComponent;
