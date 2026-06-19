-- Demo convenience: allow anonymous read of the creator catalog so the
-- discovery/database pages render live data without forcing login.
-- Deal-loop tables remain workspace-scoped (auth required).
create policy "catalog read anon" on public.creators         for select to anon using (true);
create policy "catalog read anon" on public.creator_metrics  for select to anon using (true);
create policy "catalog read anon" on public.creator_audience for select to anon using (true);
create policy "catalog read anon" on public.creator_content  for select to anon using (true);
