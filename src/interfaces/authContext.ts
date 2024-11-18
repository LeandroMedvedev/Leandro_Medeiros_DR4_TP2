interface IAuthContextProps {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
}

export default IAuthContextProps;