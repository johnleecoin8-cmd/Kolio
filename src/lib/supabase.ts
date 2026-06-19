import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** True when backend env is configured and the feature flag is on. */
export const BACKEND_ENABLED =
  import.meta.env.VITE_USE_BACKEND === 'true' && !!url && !!anon;

/** Supabase client — null when backend is disabled (marketing-only demo). */
export const supabase = BACKEND_ENABLED ? createClient(url!, anon!) : null;
