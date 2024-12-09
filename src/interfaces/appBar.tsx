import { SxProps } from '@mui/system';

interface IAppBarProps {
  title: string;
  id?: string | number;
  _delete?: () => void;
  sx?: SxProps;
}

export default IAppBarProps;
