import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface ICardNewItemProps {
  actionType: number;
  color?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  title: string;
}

export default ICardNewItemProps;
