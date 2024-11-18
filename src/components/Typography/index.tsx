import { Typography } from '@mui/material';

import { ITextProps } from '../../interfaces';

const TextComponent: React.FC<ITextProps> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
);

export default TextComponent;
