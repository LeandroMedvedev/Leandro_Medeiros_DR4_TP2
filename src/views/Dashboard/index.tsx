import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from '../../components';
import { useAuthContext } from '../../contexts';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthContext();

  const handleSignOut = () => {
    navigate('/signin');
    signOut();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ButtonComponent onClick={handleSignOut}>Sair</ButtonComponent>
    </div>
  );
};

export default Dashboard;
