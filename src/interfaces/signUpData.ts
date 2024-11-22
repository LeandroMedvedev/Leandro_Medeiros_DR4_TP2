import FormInputField from './formInputField';
import SignInDataProps from './signInData';

interface SignUpDataProps extends SignInDataProps {
  confirmPassword: FormInputField;
}

export default SignUpDataProps;