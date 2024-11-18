import { Snackbar } from '@mui/material';

import { ISnackbarProps } from '../../interfaces';

const SnackbarComponent: React.FC<ISnackbarProps> = ({
  children,
  ...props
}) => <Snackbar {...props}>{children}</Snackbar>;

export default SnackbarComponent;
