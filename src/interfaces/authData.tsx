import { SupabaseClient } from '@supabase/supabase-js';

interface TAuthData {
  email: string;
  password: string;
  supabase: SupabaseClient<any, 'public', any>;
}

export default TAuthData;
