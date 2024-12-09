import { IHandleInputChangeProps } from '../interfaces';

const handleInputChange: IHandleInputChangeProps = (field, value, data, setData) => {
  setData({ ...data, [ field ]: value })
}

export default handleInputChange;