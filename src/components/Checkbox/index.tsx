import { Checkbox } from '@mui/material';

import { ICheckboxProps } from '../../interfaces';

const CheckboxComponent: React.FC<ICheckboxProps> = (props) => (
  <Checkbox {...props} />
);

export default CheckboxComponent;
