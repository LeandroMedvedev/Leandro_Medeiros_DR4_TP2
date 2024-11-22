import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const session = localStorage.getItem('session');

  return session ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
