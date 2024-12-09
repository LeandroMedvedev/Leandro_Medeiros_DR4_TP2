interface DiaperData {
  start_date?: Date | null;
  type?: number;
  observation?: string;
  [key: string]: any;
}

type SetDataFunction = (newData: DiaperData) => void;

interface IDiaperProps {
  data: DiaperData;
  setData: SetDataFunction;
  translate: (key: string) => string;
}

export default IDiaperProps;
