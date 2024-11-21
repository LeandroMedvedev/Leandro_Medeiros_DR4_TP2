import { SignUpDataProps } from '../interfaces';

const handleSignUpInputChange = (
  setData: React.Dispatch<React.SetStateAction<SignUpDataProps>>,
  field: keyof SignUpDataProps,
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


export default handleSignUpInputChange;