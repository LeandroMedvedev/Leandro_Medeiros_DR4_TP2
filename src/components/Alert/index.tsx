import { Alert } from '@mui/material';

import { IAlertProps } from '../../interfaces';

const AlertComponent: React.FC<IAlertProps> = ({ children, ...props }) => (
  <Alert {...props}>{children}</Alert>
);

export default AlertComponent;
