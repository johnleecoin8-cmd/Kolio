import { supabase } from '@/lib/supabase';
import type { Creator, CreatorFilters, AudienceRow, ContentRow, CreatorStats } from './types';

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

/** Recent posts for a creator's content grid. */
export async function getContent(creatorId: string, limit = 9): Promise<ContentRow[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('creator_content').select('id,thumbnail_url,post_url,kind,likes,comments,posted_at')
    .eq('creator_id', creatorId).order('posted_at', { ascending: false }).limit(limit);
  if (error) throw error;
  return (data ?? []) as ContentRow[];
}

/** Aggregate catalog stats (counts, reach, avg ER, platform/category splits). */
export async function getStats(): Promise<CreatorStats | null> {
  if (!supabase) return null;
  const { data, error } = await supabase.rpc('creator_stats');
  if (error) throw error;
  return (data ?? null) as CreatorStats | null;
}

/** Top creators for "trending"/showcase rails. */
export async function getTopCreators(filters: CreatorFilters = {}): Promise<Creator[]> {
  return searchCreators({ sort: 'engagement', limit: 12, ...filters });
}

/** Lookalikes: same category/platform as a seed creator, excluding itself. */
export async function getLookalikes(seed: Creator, limit = 8): Promise<Creator[]> {
  const list = await searchCreators({
    category: seed.category ?? undefined,
    platform: seed.platform,
    sort: 'engagement',
    limit: limit + 1,
  });
  return list.filter((c) => c.id !== seed.id).slice(0, limit);
}
