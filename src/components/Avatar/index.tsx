import { Avatar } from '@mui/material';

import { IAvatarProps } from '../../interfaces';

const AvatarComponent: React.FC<IAvatarProps> = ({ children, ...props }) => (
  <Avatar {...props} />
);

export default AvatarComponent;
