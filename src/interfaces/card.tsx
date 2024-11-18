import { CardProps } from '@mui/material';

interface ICardProps extends CardProps {
  children?: React.ReactNode;
  props: any;
}

export default ICardProps;
