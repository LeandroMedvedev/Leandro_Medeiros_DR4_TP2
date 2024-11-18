import { Button } from '@mui/material';

import { IButtonProps } from '../../interfaces';

const ButtonComponent: React.FC<IButtonProps> = ({ children, ...props }) => (
  <Button variant='contained' {...props}>
    {children}
  </Button>
);

export default ButtonComponent;
