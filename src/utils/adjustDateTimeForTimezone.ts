import timezone from 'dayjs/plugin/timezone';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const adjustDateTimeForTimezone = (dateString: Date | Dayjs) => {
  if (!dateString) return new Date();
  const dateUTC = dayjs.utc(dateString);
  const dateInUTCMinus = dateUTC.tz('America/Sao_Paulo');

  return dayjs(dateInUTCMinus.format());
};

export default adjustDateTimeForTimezone;
