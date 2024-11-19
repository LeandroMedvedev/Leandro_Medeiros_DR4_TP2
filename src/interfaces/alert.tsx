import { AlertProps } from '@mui/material';

interface IAlertProps extends AlertProps {
  props?: any;
}

export default IAlertProps;

/*
  import { AlertProps } from '@mui/material';

  interface IAlert extends AlertProps {
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
  }

  interface IAlertProps extends AlertProps {
    alert: IAlert | null;
    showAlert: (message: string, type?: IAlert['type']) => void;
  }

  export type { IAlert, IAlertProps };

*/
