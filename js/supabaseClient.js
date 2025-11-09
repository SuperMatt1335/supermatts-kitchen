import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://mnweqcnqjizpnfsaqpgy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_mv9j00m1Db7INtxERfQ6Aw_nHViwdaF';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
