import { Grid2 } from '@mui/material';

import { IGridProps } from '../../interfaces';

const GridComponent: React.FC<IGridProps> = ({ children, ...props }) => (
  <Grid2 {...props}>{children}</Grid2>
);

export default GridComponent;
