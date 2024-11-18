import { BoxProps } from '@mui/material';

interface IBoxProps extends BoxProps {
  children?: React.ReactNode;
  props: any;
}

export default IBoxProps;
