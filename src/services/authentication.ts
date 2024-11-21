import { redirect } from 'react-router-dom';

import { TAuthData } from '../interfaces';

const isAuthenticated = () => {
  const session: string | null = localStorage.getItem('session');

  if (session) throw redirect('/');

  return null;
}

const handlePrivateRouteChecking = () => {
  const session: string | null = localStorage.getItem('session');

  if (!session) throw redirect('/signin');

  return null;
}

const signIn = async ({ email, password, supabase }: TAuthData) => await supabase.auth.signInWithPassword({
  email, password
});

const signUp = async ({ email, password, supabase }: TAuthData) => await supabase.auth.signUp({
  email, password
});

export { isAuthenticated, handlePrivateRouteChecking, signIn, signUp }