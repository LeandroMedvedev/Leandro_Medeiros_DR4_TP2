import { Dayjs } from 'dayjs';

interface EatData {
  action_type?: number;
  type?: 1 | 2;
  start_date?: Date | Dayjs | null;
  end_date?: Date | Dayjs | null;
  quantity?: string | number | null;
  side?: 1 | 2 | 3 | null;
  observation?: string;
  [key: string]: any;
}

interface IEatProps {
  data: EatData;
  setData: (newData: EatData) => void;
  translate: (key: string) => string;
}

export default IEatProps;
