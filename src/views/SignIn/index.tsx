import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from '../../components';
import { useAuthContext } from '../../contexts';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthContext();

  const handleSignIn = () => {
    navigate('/dashboard');
    signIn();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <ButtonComponent onClick={handleSignIn}>Entrar</ButtonComponent>
    </div>
  );
};

export default SignIn;
