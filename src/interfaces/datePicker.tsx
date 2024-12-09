import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

interface IDatePickerProps<TDate extends Dayjs = any>
  extends DatePickerProps<TDate> {}

export default IDatePickerProps;
