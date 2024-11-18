import { ContainerProps } from '@mui/material';

interface IContainerProps extends ContainerProps {
  children?: React.ReactNode;
  component?: 'main';
  maxWidth?: 'xs';
  props: any;
}

export default IContainerProps;
