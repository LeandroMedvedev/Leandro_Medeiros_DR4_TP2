import { AuthProvider } from './contexts';
import AppRoutes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
