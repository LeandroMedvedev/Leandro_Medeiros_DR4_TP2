interface FormField {
  value: string;
  error: string | null;
  helperText: string | null;
}

interface SignInDataProps {
  email: FormField;
  password: FormField;
}

export default SignInDataProps;