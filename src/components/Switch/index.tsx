import { Switch } from '@mui/material';

import { ISwitchProps } from '../../interfaces';

const SwitchComponent: React.FC<ISwitchProps> = (props) => (
  <Switch {...props} />
);

export default SwitchComponent;
