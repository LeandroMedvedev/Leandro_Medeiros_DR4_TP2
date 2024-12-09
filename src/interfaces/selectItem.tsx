interface Data {
  [key: string]: any;
}

type SetDataFunction = (newData: Data) => void;

interface ISelectItemProps {
  (value: any, key: string, data: Data, setData: SetDataFunction): void;
}

export default ISelectItemProps;
