import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ptBR } from '@mui/x-date-pickers/locales';

import { IDateTimePickerProps } from '../../interfaces';

const DateTimePickerComponent: React.FC<IDateTimePickerProps> = ({
  ...props
}) => {
  return (
    <LocalizationProvider
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
      dateAdapter={AdapterDayjs}
    >
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
