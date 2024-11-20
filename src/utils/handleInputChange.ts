import { SignInDataProps } from '../interfaces';

const handleInputChange = (
  setData: React.Dispatch<React.SetStateAction<SignInDataProps>>,
  field: keyof SignInDataProps,
  value: string
) => {
  setData((previous) => ({
    ...previous,
    [ field ]: {
      ...previous[ field ],
      value,
    },
  }));
};

export default handleInputChange;