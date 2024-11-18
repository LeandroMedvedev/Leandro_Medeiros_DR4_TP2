import { Container } from '@mui/material';

import { IContainerProps } from '../../interfaces';

const ContainerComponent: React.FC<IContainerProps> = ({
  children,
  ...props
}) => <Container {...props}>{children}</Container>;

export default ContainerComponent;
