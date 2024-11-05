import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';
import { useAuth } from '../../context/AuthContext';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSignIn = () => {
    navigate('/dashboard');
    signIn();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button onClick={handleSignIn} text='Entrar' />
    </div>
  );
};

export default SignIn;
