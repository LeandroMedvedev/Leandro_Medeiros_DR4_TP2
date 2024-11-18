import { Box } from '@mui/material';

import { IBoxProps } from '../../interfaces';

const BoxComponent: React.FC<IBoxProps> = ({ children, ...props }) => (
  <Box {...props}>{children}</Box>
);

export default BoxComponent;
