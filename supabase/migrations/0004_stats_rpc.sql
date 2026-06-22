-- Aggregate stats for landing/marketing "live numbers" + lookalike helper.
create or replace function public.creator_stats()
returns jsonb language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'total',          (select count(*) from public.creators),
    'verified',       (select count(*) from public.creators where is_verified),
    'avg_engagement', (select round(avg(engagement_rate)::numeric, 4) from public.creators),
    'total_reach',    (select coalesce(sum(followers),0) from public.creators),
    'by_platform',    (select jsonb_object_agg(platform, c) from (select platform, count(*) c from public.creators group by platform) t),
    'by_category',    (select jsonb_object_agg(category, c) from (select category, count(*) c from public.creators group by category) t)
  );
$$;
grant execute on function public.creator_stats() to anon, authenticated;
