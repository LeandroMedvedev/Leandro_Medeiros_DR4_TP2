import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from '@mui/x-date-pickers/locales';

import { IDatePickerProps } from '../../interfaces';

const DatePickerComponent: React.FC<IDatePickerProps> = ({ ...props }) => {
  return (
    <LocalizationProvider
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
      dateAdapter={AdapterDayjs}
    >
      <DemoContainer components={['DatePicker']}>
        <DatePicker {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
