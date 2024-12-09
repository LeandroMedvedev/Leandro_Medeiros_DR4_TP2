import { ISelectItemProps } from '../interfaces';

const selectItem: ISelectItemProps = (value, key, data, setData) => {
  setData({ ...data, [ key ]: value })
}

export default selectItem;