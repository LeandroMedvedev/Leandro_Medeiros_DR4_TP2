import { Card } from '@mui/material';

import { ICardProps } from '../../interfaces';

const CardComponent: React.FC<ICardProps> = ({ children, ...props }) => (
  <Card {...props}>{children}</Card>
);

export default CardComponent;
