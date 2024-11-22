import { Typography } from '@mui/material';

import { ITextProps } from '../../interfaces';

const TypographyComponent: React.FC<ITextProps> = ({ children, ...props }) => (
  <Typography
    className={`general-textfield ${props.className ? props.className : ''}`}
    {...props}
  >
    {children}
  </Typography>
);

export default TypographyComponent;
