# modash-clone — Backend Design Brief (Demo/MVP)

목표: 이미 완성한 React 프론트(30 페이지, 토큰화 디자인 시스템)를 **실제로 작동하는 데모 제품**으로 만든다. 실데이터 소싱은 보류하고 **시드 DB**로 모든 핵심 화면(디스커버리·크리에이터 프로필·캠페인·애널리틱스·결제)을 진짜 백엔드에 연결한다. 목 데이터 → 진짜 DB 쿼리로 전환하는 것이 이 단계의 본질이다.

스코프 결정(확정): 도메인 = 데모/MVP · 데이터 = 시드부터 · 산출물 = 본 설계 문서 먼저.

---

## 1. 아키텍처 개요

```
React (Vite, 기존 modash-clone)
   │  @supabase/supabase-js (RLS로 보호된 직접 쿼리: 읽기 위주)
   │  Edge Functions 호출 (민감 쓰기: 에스크로/딜 상태 전이/페이아웃)
   ▼
Supabase
   ├─ Postgres (스키마 + RLS + tsvector 검색 + 인덱스)
   ├─ Auth (이메일/OAuth, 역할: brand · admin)
   ├─ Storage (브랜드 로고·캠페인 에셋 업로드)
   └─ Edge Functions (Deno: deal 상태머신, 결제 시뮬레이션, 검색 RPC)
```

선정 근거: Postgres+Auth+Storage+RLS+서버리스 함수가 한 묶음 → 데모/MVP를 가장 빠르게 작동시키고, 코딩 위임 모델에 최적. 기존 Kolio 스택 방향과도 일치.

비용: 데모 단계 Supabase Free 티어로 충분.

---

## 2. 데이터 모델 (Postgres 스키마)

크게 세 묶음: (A) 앱 계정/워크스페이스, (B) 크리에이터 카탈로그(시드 데이터), (C) 거래 루프(캠페인·딜·결제).

### A. 계정
```
profiles                -- auth.users 1:1 (id = auth.uid)
  id uuid PK FK→auth.users
  workspace_id uuid FK→workspaces
  role text            -- 'brand' | 'admin'
  full_name, avatar_url, created_at

workspaces              -- 브랜드/에이전시 단위 (멀티 유저 대비)
  id uuid PK, name, plan text default 'trial', created_at
```

### B. 크리에이터 카탈로그 (시드로 채움 — modash의 "DB" 대응물)
```
creators
  id uuid PK
  platform text         -- 'instagram'|'tiktok'|'youtube'|'x'
  handle, display_name, avatar_url, bio
  category text         -- 'crypto'|'beauty'|'fitness'... (시드는 데모 카테고리)
  country text, language text
  followers int, engagement_rate numeric, avg_views int, avg_likes int
  is_verified bool, fake_follower_pct numeric   -- vetting 화면용
  search_tsv tsvector   -- 풀텍스트(이름·핸들·bio)
  created_at

creator_metrics         -- 시계열 스냅샷 (성장 차트용)
  id, creator_id FK, captured_on date
  followers int, engagement_rate numeric, avg_views int

creator_audience        -- 오디언스 분석 (도넛/바 차트용)
  id, creator_id FK
  dimension text        -- 'country'|'age'|'gender'|'interest'
  bucket text           -- 'US' | '18-24' | 'female' ...
  share numeric         -- 0..1

creator_content         -- 최근 콘텐츠 그리드 (썸네일·인게이지먼트)
  id, creator_id FK, thumbnail_url, post_url, kind text, likes, comments, posted_at
```

### C. 거래 루프
```
lists                   -- 저장한 크리에이터 리스트
  id, workspace_id FK, name, created_by FK→profiles, created_at
list_items
  id, list_id FK, creator_id FK, note, added_at

saved_searches
  id, workspace_id FK, name, filters jsonb, created_at

campaigns
  id, workspace_id FK, name, status text   -- 'draft'|'active'|'completed'
  budget numeric, brief text, starts_on, ends_on, created_by, created_at

campaign_creators       -- 캠페인×크리에이터 + 콜래버 라이프사이클
  id, campaign_id FK, creator_id FK
  stage text            -- 'shortlisted'|'invited'|'negotiating'|'active'|'delivered'|'paid'|'declined'
  agreed_fee numeric, deliverables jsonb, updated_at

payments                -- 데모 에스크로/페이아웃 기록
  id, campaign_creator_id FK
  amount numeric, currency text default 'USD'
  state text            -- 'escrow_funded'|'released'|'refunded'
  created_at, released_at

content_tracking        -- 캠페인 트래킹 화면용
  id, campaign_creator_id FK, post_url, views, likes, comments, captured_on
```

인덱스: `creators(category, country, platform)`, `creators using gin(search_tsv)`, `creator_metrics(creator_id, captured_on)`, FK 전부 인덱스.

---

## 3. 인증 & 권한 (RLS)

역할: 데모는 `brand`(가입자)와 `admin` 둘. 크리에이터는 앱 유저가 아니라 카탈로그 데이터(시드)이므로 KOL 로그인은 이 단계 보류.

RLS 정책 원칙
- `creators / creator_*` : 인증 유저는 전부 읽기 가능(카탈로그). 쓰기는 admin/서비스롤만.
- `workspaces / profiles / lists / saved_searches / campaigns / campaign_creators / payments` : 자기 `workspace_id`에 속한 행만 읽기·쓰기.
- 민감 전이(에스크로 펀딩·릴리스, 딜 stage 전이)는 클라이언트 직접 UPDATE 금지 → Edge Function(서비스롤)에서만 수행하고 상태머신 규칙 검증.

가입 시 트리거: `auth.users` insert → `profiles` + 개인 `workspaces` 자동 생성.

---

## 4. 프론트 연결 (목 → 진짜)

데이터 레이어 신설
```
src/lib/supabase.ts        -- createClient(env)
src/api/creators.ts        -- searchCreators(filters), getCreator(id), getAudience(id)...
src/api/campaigns.ts       -- list/create/updateStage...
src/api/lists.ts, payments.ts
src/hooks/                 -- useCreators(), useCampaign(id) (간단 fetch+useState, 또는 react-query 도입)
```

전환 원칙: 마케팅 페이지(홈·가격·기능 등)는 **정적 유지**(디자인 그대로). 앱 성격 화면만 DB에 연결한다.
- `/influencer-database`, `/features/influencer-discovery` 의 결과 테이블·필터 → `searchCreators()` (Postgres ilike + 필터 + tsvector + 페이지네이션)
- 크리에이터 프로필/리포트 카드 → `getCreator` + `getAudience`(recharts 도넛/바) + `creator_content` 그리드
- `/features/influencer-management` → campaigns + campaign_creators 칸반(stage)
- `/features/influencer-tracking` → content_tracking 차트
- `/influencer-payments` → payments 상태(에스크로/릴리스, Edge Function 호출)
- 계산기 페이지(engagement-rate 등)는 클라이언트 계산 유지(백엔드 불필요)

피처 플래그: `VITE_USE_BACKEND` 로 목/실데이터 토글 → 백엔드 없이도 마케팅 데모가 깨지지 않게.

---

## 5. 검색 & 차트 (데모 수준)

검색: 별도 엔진 없이 Postgres로 충분.
- 텍스트: `search_tsv @@ websearch_to_tsquery(...)`
- 필터: category/country/platform = , followers·engagement BETWEEN, ORDER BY + LIMIT/OFFSET
- 복합 로직은 `rpc('search_creators', filters jsonb)` Postgres 함수로 캡슐화 → 프론트는 한 번 호출.

차트: 이미 깔린 recharts가 `creator_metrics`(성장 라인), `creator_audience`(국가/연령/성별 도넛·바)를 직접 렌더.

---

## 6. 시드 데이터 전략

`supabase/seed.sql` 또는 `scripts/seed.ts`(@faker-js/faker)로 생성
- creators ~500명: 플랫폼·카테고리·국가 분포 현실적으로, 팔로워/인게이지먼트 로그분포
- 각 creator: metrics 12개월 스냅샷 + audience 4차원(국가·연령·성별·관심사) + content 9개(썸네일은 picsum/placeholder 또는 수집한 modash CDN 아바타 재사용)
- 데모 워크스페이스 1개 + 캠페인 3개(각 stage 분포) + payments 샘플
- 멱등 시더(재실행 안전): truncate 후 재생성 옵션

규모 0원, 즉시 전 화면 작동. 이후 단계에서 시드 → 서드파티 API/수집으로 교체.

---

## 7. 단계별 실행 계획

1. **부트스트랩**: Supabase 프로젝트 생성, `supabase/migrations/0001_init.sql`(스키마+인덱스+RLS+가입 트리거), env 세팅, `src/lib/supabase.ts`.
2. **시드**: `scripts/seed.ts` 작성·실행 → creators/metrics/audience/content + 데모 캠페인.
3. **읽기 연결**: 디스커버리·DB·프로필·애널리틱스 화면을 `src/api/*` 통해 실데이터로. 피처 플래그.
4. **거래 루프**: 캠페인 CRUD + stage 칸반 + 리스트 저장/저장검색.
5. **결제·트래킹**: payments Edge Function(에스크로/릴리스 상태머신) + tracking 차트.
6. **Auth/온보딩**: 가입·로그인·워크스페이스, 보호 라우트.
7. **마감**: RLS 점검, 시드 리셋 스크립트, README 실행법, 배포(Vercel/Netlify + Supabase).

---

## 8. 의도적 보류 (데모 이후)

실데이터 소싱(서드파티 API·자체 크롤러), 크리에이터(KOL)측 앱·로그인, 실제 결제 레일(Stripe Connect/USDC 온체인 에스크로), 검색 엔진(Typesense/Meilisearch), 메시징/이메일, 대규모 인제스천 워커. 전부 스키마·인터페이스는 이번에 호환되게 잡아두고 구현만 미룬다.

---

## 9. 환경/세팅 메모

```
.env.local
  VITE_SUPABASE_URL=...
  VITE_SUPABASE_ANON_KEY=...
  VITE_USE_BACKEND=true
supabase/  (CLI: 마이그레이션·로컬 스택·seed)
```
민감정보(서비스롤 키)는 Edge Function 환경에만. 프론트엔드는 anon 키 + RLS로만 접근.
