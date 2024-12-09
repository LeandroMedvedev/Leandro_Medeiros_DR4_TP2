import dayjs from 'dayjs';

import { ICalculateDurationProps } from '../interfaces';

const calculateDuration: ICalculateDurationProps = (startTimeStr, type) => {
  const startTime = dayjs.utc(startTimeStr);
  const endTime = dayjs().startOf('day');

  if (type === "day") {
    return dayjs.duration(endTime.diff(startTime)).asDays();
  }
  else if (type === "hour") {
    return dayjs.duration(endTime.diff(startTime)).asHours();
  }
  else {
    return dayjs.duration(endTime.diff(startTime)).asMinutes();
  }
}

export default calculateDuration;