import { ListProps } from '@mui/material/List';

interface Item {
  id: string | number;
  action_type: 1 | 2 | 3;
  [key: string]: any;
}

interface ICustomListProps extends ListProps {
  items: Item[];
}

export default ICustomListProps;
