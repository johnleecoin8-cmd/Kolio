-- Discovery search RPC: one call handles text + filters + sort + pagination.
create or replace function public.search_creators(filters jsonb default '{}')
returns setof public.creators
language sql stable security definer set search_path = public as $$
  select *
  from public.creators c
  where
    (filters->>'q' is null or filters->>'q' = ''
       or c.search_tsv @@ websearch_to_tsquery('simple', unaccent(filters->>'q')))
    and (filters->>'platform' is null or c.platform = filters->>'platform')
    and (filters->>'category' is null or c.category = filters->>'category')
    and (filters->>'country'  is null or c.country  = filters->>'country')
    and (filters->>'followers_min' is null or c.followers >= (filters->>'followers_min')::int)
    and (filters->>'followers_max' is null or c.followers <= (filters->>'followers_max')::int)
    and (filters->>'engagement_min' is null or c.engagement_rate >= (filters->>'engagement_min')::numeric)
  order by
    case when coalesce(filters->>'sort','followers') = 'engagement' then c.engagement_rate end desc nulls last,
    case when coalesce(filters->>'sort','followers') = 'followers'  then c.followers end desc nulls last
  limit  coalesce((filters->>'limit')::int, 24)
  offset coalesce((filters->>'offset')::int, 0);
$$;

grant execute on function public.search_creators(jsonb) to authenticated, anon;
