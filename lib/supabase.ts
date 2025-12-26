
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qrdxhydadqtikqpmeetn.supabase.co';
const supabaseAnonKey = 'sb_publishable_LCg0ACU5Vzdb9LjEllEmLw_HTDusL6r';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
