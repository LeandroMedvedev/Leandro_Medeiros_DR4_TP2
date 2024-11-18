import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../contexts';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
