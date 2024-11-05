interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
}

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export type { AuthContextProps, ButtonProps }