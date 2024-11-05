import { Button } from '../../components';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={signOut} text='Sair' />
    </div>
  );
};

export default Dashboard;
