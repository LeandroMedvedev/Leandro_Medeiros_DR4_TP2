type DurationType = 'days' | 'day' | 'hours' | 'hour' | 'minutes' | 'minute';

interface ICalculateDurationProps {
  (startTimeStr: string, type: DurationType): number;
}

export default ICalculateDurationProps;
