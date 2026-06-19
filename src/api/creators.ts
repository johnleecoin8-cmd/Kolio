import { supabase } from '@/lib/supabase';
import type { Creator, CreatorFilters, AudienceRow } from './types';

/** Discovery search via the search_creators RPC (text + filters + sort + paging). */
export async function searchCreators(filters: CreatorFilters = {}): Promise<Creator[]> {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc('search_creators', { filters });
  if (error) throw error;
  return (data ?? []) as Creator[];
}

export async function getCreator(id: string): Promise<Creator | null> {
  if (!supabase) return null;
  const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
  if (error) throw error;
  return data as Creator;
}

export async function getAudience(creatorId: string): Promise<AudienceRow[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('creator_audience').select('dimension,bucket,share').eq('creator_id', creatorId);
  if (error) throw error;
  return (data ?? []) as AudienceRow[];
}

export async function getMetrics(creatorId: string) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('creator_metrics').select('captured_on,followers,engagement_rate,avg_views')
    .eq('creator_id', creatorId).order('captured_on');
  if (error) throw error;
  return data ?? [];
}
