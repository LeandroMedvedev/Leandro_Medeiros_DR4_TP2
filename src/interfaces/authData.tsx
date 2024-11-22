import { SupabaseClient } from '@supabase/supabase-js';

interface IAuthData {
  email: string;
  password: string;
  supabase: SupabaseClient<any, 'public', any>;
}

export default IAuthData;
