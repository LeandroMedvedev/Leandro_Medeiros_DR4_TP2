import { SignInDataProps } from '../interfaces';

const handleSignInInputChange = (
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


export default handleSignInInputChange;