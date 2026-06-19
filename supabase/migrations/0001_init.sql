-- =====================================================================
-- modash-clone — Demo/MVP backend schema
-- Groups: (A) accounts, (B) creator catalog (seeded), (C) deal loop
-- Includes indexes, full-text search, RLS, and signup trigger.
-- =====================================================================

create extension if not exists "pgcrypto";
create extension if not exists "unaccent";

-- ---------------------------------------------------------------------
-- A. ACCOUNTS
-- ---------------------------------------------------------------------
create table public.workspaces (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  plan        text not null default 'trial',
  created_at  timestamptz not null default now()
);

create table public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  role         text not null default 'brand' check (role in ('brand','admin')),
  full_name    text,
  avatar_url   text,
  created_at   timestamptz not null default now()
);
create index profiles_workspace_idx on public.profiles(workspace_id);

-- helper: current user's workspace (security definer to avoid RLS recursion)
create or replace function public.current_workspace_id()
returns uuid language sql stable security definer set search_path = public as $$
  select workspace_id from public.profiles where id = auth.uid()
$$;

-- ---------------------------------------------------------------------
-- B. CREATOR CATALOG  (public read for authenticated users)
-- ---------------------------------------------------------------------
create table public.creators (
  id               uuid primary key default gen_random_uuid(),
  platform         text not null check (platform in ('instagram','tiktok','youtube','x')),
  handle           text not null,
  display_name     text not null,
  avatar_url       text,
  bio              text,
  category         text,
  country          text,
  language         text,
  followers        int  not null default 0,
  engagement_rate  numeric(5,4) not null default 0,
  avg_views        int  not null default 0,
  avg_likes        int  not null default 0,
  is_verified      boolean not null default false,
  fake_follower_pct numeric(5,4) not null default 0,
  search_tsv       tsvector,
  created_at       timestamptz not null default now()
);
create index creators_filter_idx on public.creators(platform, category, country);
create index creators_followers_idx on public.creators(followers);
create index creators_engagement_idx on public.creators(engagement_rate);
create index creators_search_idx on public.creators using gin(search_tsv);

create or replace function public.creators_tsv_update()
returns trigger language plpgsql as $$
begin
  new.search_tsv :=
    setweight(to_tsvector('simple', unaccent(coalesce(new.display_name,''))), 'A') ||
    setweight(to_tsvector('simple', unaccent(coalesce(new.handle,''))), 'A') ||
    setweight(to_tsvector('simple', unaccent(coalesce(new.category,''))), 'B') ||
    setweight(to_tsvector('simple', unaccent(coalesce(new.bio,''))), 'C');
  return new;
end $$;
create trigger creators_tsv before insert or update on public.creators
  for each row execute function public.creators_tsv_update();

create table public.creator_metrics (
  id              uuid primary key default gen_random_uuid(),
  creator_id      uuid not null references public.creators(id) on delete cascade,
  captured_on     date not null,
  followers       int not null,
  engagement_rate numeric(5,4) not null,
  avg_views       int not null
);
create index creator_metrics_idx on public.creator_metrics(creator_id, captured_on);

create table public.creator_audience (
  id          uuid primary key default gen_random_uuid(),
  creator_id  uuid not null references public.creators(id) on delete cascade,
  dimension   text not null check (dimension in ('country','age','gender','interest')),
  bucket      text not null,
  share       numeric(5,4) not null
);
create index creator_audience_idx on public.creator_audience(creator_id, dimension);

create table public.creator_content (
  id            uuid primary key default gen_random_uuid(),
  creator_id    uuid not null references public.creators(id) on delete cascade,
  thumbnail_url text,
  post_url      text,
  kind          text,
  likes         int not null default 0,
  comments      int not null default 0,
  posted_at     timestamptz
);
create index creator_content_idx on public.creator_content(creator_id);

-- ---------------------------------------------------------------------
-- C. DEAL LOOP  (workspace-scoped)
-- ---------------------------------------------------------------------
create table public.lists (
  id           uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name         text not null,
  created_by   uuid references public.profiles(id) on delete set null,
  created_at   timestamptz not null default now()
);
create index lists_workspace_idx on public.lists(workspace_id);

create table public.list_items (
  id         uuid primary key default gen_random_uuid(),
  list_id    uuid not null references public.lists(id) on delete cascade,
  creator_id uuid not null references public.creators(id) on delete cascade,
  note       text,
  added_at   timestamptz not null default now(),
  unique(list_id, creator_id)
);
create index list_items_list_idx on public.list_items(list_id);

create table public.saved_searches (
  id           uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name         text not null,
  filters      jsonb not null default '{}',
  created_at   timestamptz not null default now()
);
create index saved_searches_workspace_idx on public.saved_searches(workspace_id);

create table public.campaigns (
  id           uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name         text not null,
  status       text not null default 'draft' check (status in ('draft','active','completed')),
  budget       numeric(12,2) not null default 0,
  brief        text,
  starts_on    date,
  ends_on      date,
  created_by   uuid references public.profiles(id) on delete set null,
  created_at   timestamptz not null default now()
);
create index campaigns_workspace_idx on public.campaigns(workspace_id);

create table public.campaign_creators (
  id           uuid primary key default gen_random_uuid(),
  campaign_id  uuid not null references public.campaigns(id) on delete cascade,
  creator_id   uuid not null references public.creators(id) on delete cascade,
  stage        text not null default 'shortlisted'
                 check (stage in ('shortlisted','invited','negotiating','active','delivered','paid','declined')),
  agreed_fee   numeric(12,2) not null default 0,
  deliverables jsonb not null default '[]',
  updated_at   timestamptz not null default now(),
  unique(campaign_id, creator_id)
);
create index campaign_creators_campaign_idx on public.campaign_creators(campaign_id);

create table public.payments (
  id                    uuid primary key default gen_random_uuid(),
  campaign_creator_id   uuid not null references public.campaign_creators(id) on delete cascade,
  amount                numeric(12,2) not null,
  currency              text not null default 'USD',
  state                 text not null default 'escrow_funded'
                          check (state in ('escrow_funded','released','refunded')),
  created_at            timestamptz not null default now(),
  released_at           timestamptz
);
create index payments_cc_idx on public.payments(campaign_creator_id);

create table public.content_tracking (
  id                  uuid primary key default gen_random_uuid(),
  campaign_creator_id uuid not null references public.campaign_creators(id) on delete cascade,
  post_url            text,
  views               int not null default 0,
  likes               int not null default 0,
  comments            int not null default 0,
  captured_on         date not null default current_date
);
create index content_tracking_cc_idx on public.content_tracking(campaign_creator_id);

-- ---------------------------------------------------------------------
-- SIGNUP TRIGGER: new auth user -> workspace + profile
-- ---------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare ws_id uuid;
begin
  insert into public.workspaces(name)
    values (coalesce(new.raw_user_meta_data->>'workspace_name', split_part(new.email,'@',1) || '''s workspace'))
    returning id into ws_id;
  insert into public.profiles(id, workspace_id, role, full_name)
    values (new.id, ws_id, 'brand', new.raw_user_meta_data->>'full_name');
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------
alter table public.workspaces        enable row level security;
alter table public.profiles          enable row level security;
alter table public.creators          enable row level security;
alter table public.creator_metrics   enable row level security;
alter table public.creator_audience  enable row level security;
alter table public.creator_content   enable row level security;
alter table public.lists             enable row level security;
alter table public.list_items        enable row level security;
alter table public.saved_searches    enable row level security;
alter table public.campaigns         enable row level security;
alter table public.campaign_creators enable row level security;
alter table public.payments          enable row level security;
alter table public.content_tracking  enable row level security;

-- Catalog: any authenticated user can read
create policy "catalog read" on public.creators         for select to authenticated using (true);
create policy "catalog read" on public.creator_metrics  for select to authenticated using (true);
create policy "catalog read" on public.creator_audience for select to authenticated using (true);
create policy "catalog read" on public.creator_content  for select to authenticated using (true);

-- Accounts
create policy "own workspace read" on public.workspaces for select to authenticated
  using (id = public.current_workspace_id());
create policy "own profile rw" on public.profiles for all to authenticated
  using (workspace_id = public.current_workspace_id())
  with check (workspace_id = public.current_workspace_id());

-- Workspace-scoped tables: members can do everything within their workspace
create policy "ws lists"        on public.lists           for all to authenticated
  using (workspace_id = public.current_workspace_id()) with check (workspace_id = public.current_workspace_id());
create policy "ws saved"        on public.saved_searches  for all to authenticated
  using (workspace_id = public.current_workspace_id()) with check (workspace_id = public.current_workspace_id());
create policy "ws campaigns"    on public.campaigns       for all to authenticated
  using (workspace_id = public.current_workspace_id()) with check (workspace_id = public.current_workspace_id());

-- Child tables: scoped via parent workspace
create policy "ws list_items" on public.list_items for all to authenticated
  using (exists (select 1 from public.lists l where l.id = list_id and l.workspace_id = public.current_workspace_id()))
  with check (exists (select 1 from public.lists l where l.id = list_id and l.workspace_id = public.current_workspace_id()));

create policy "ws campaign_creators" on public.campaign_creators for all to authenticated
  using (exists (select 1 from public.campaigns c where c.id = campaign_id and c.workspace_id = public.current_workspace_id()))
  with check (exists (select 1 from public.campaigns c where c.id = campaign_id and c.workspace_id = public.current_workspace_id()));

create policy "ws payments" on public.payments for all to authenticated
  using (exists (select 1 from public.campaign_creators cc join public.campaigns c on c.id = cc.campaign_id
                 where cc.id = campaign_creator_id and c.workspace_id = public.current_workspace_id()))
  with check (exists (select 1 from public.campaign_creators cc join public.campaigns c on c.id = cc.campaign_id
                 where cc.id = campaign_creator_id and c.workspace_id = public.current_workspace_id()));

create policy "ws tracking" on public.content_tracking for all to authenticated
  using (exists (select 1 from public.campaign_creators cc join public.campaigns c on c.id = cc.campaign_id
                 where cc.id = campaign_creator_id and c.workspace_id = public.current_workspace_id()))
  with check (exists (select 1 from public.campaign_creators cc join public.campaigns c on c.id = cc.campaign_id
                 where cc.id = campaign_creator_id and c.workspace_id = public.current_workspace_id()));
