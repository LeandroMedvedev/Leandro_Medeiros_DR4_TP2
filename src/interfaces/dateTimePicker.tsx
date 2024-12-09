import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';

interface IDateTimePickerProps<TDate extends Dayjs = any>
  extends DateTimePickerProps<TDate> {
  fullWidth?: boolean;
}

export default IDateTimePickerProps;
