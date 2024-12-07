import { Grid2Props } from '@mui/material';

interface IGridProps extends Grid2Props {
  children?: React.ReactNode;
  item?: boolean | string;
  props?: any;
}

export default IGridProps;
