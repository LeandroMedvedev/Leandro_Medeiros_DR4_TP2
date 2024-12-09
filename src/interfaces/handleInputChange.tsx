interface Data {
  [key: string]: any;
}

type SetDataFunction = (newData: Data) => void;

interface IHandleInputChangeProps {
  (field: string, value: any, data: Data, setData: SetDataFunction): void;
}

export default IHandleInputChangeProps;
