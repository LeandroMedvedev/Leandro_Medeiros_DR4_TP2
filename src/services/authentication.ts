import { SupabaseClient } from '@supabase/supabase-js';
import { redirect } from 'react-router-dom';

type SignInArgs = {
  email: string;
  password: string;
  supabase: SupabaseClient<any, 'public', any>;
}

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

const signIn = async ({ email, password, supabase }: SignInArgs) => await supabase.auth.signInWithPassword({
  email, password
});

export { isAuthenticated, handlePrivateRouteChecking, signIn }