import { redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const token: string | null = localStorage.getItem('token');

  if (token) throw redirect('/');

  return null;
}

const handlePrivateRouteChecking = () => {
  const token: string | null = localStorage.getItem('token');

  if (!token) throw redirect('/signin');

  return null;
}

export { isAuthenticated, handlePrivateRouteChecking }