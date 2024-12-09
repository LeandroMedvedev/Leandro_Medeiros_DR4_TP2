interface SleepData {
  start_date?: Date | null;
  end_date?: Date | null;
  observation?: string;
  action_type?: number;
  [key: string]: any;
}

type SetDataFunction = (newData: SleepData) => void;

interface ISleepProps {
  data: SleepData;
  setData: SetDataFunction;
  translate: (key: string) => string;
}

export default ISleepProps;
