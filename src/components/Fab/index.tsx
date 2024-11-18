import { Fab } from '@mui/material';

import { IFabProps } from '../../interfaces';

const FabComponent: React.FC<IFabProps> = ({ children, ...props }) => (
  <Fab {...props}>{children}</Fab>
);

export default FabComponent;
