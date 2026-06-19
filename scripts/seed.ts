/**
 * Seed the modash-clone backend with demo data.
 * Usage (against local stack):
 *   SUPABASE_URL=http://127.0.0.1:54321 \
 *   SERVICE_ROLE_KEY=<from `supabase status`> \
 *   npx tsx scripts/seed.ts
 *
 * Idempotent-ish: truncates app tables first, then regenerates.
 */
import { createClient } from '@supabase/supabase-js';
import { faker } from '@faker-js/faker';

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SERVICE_ROLE_KEY;
if (!URL || !KEY) {
  console.error('Set SUPABASE_URL and SERVICE_ROLE_KEY env vars.');
  process.exit(1);
}
const db = createClient(URL, KEY, { auth: { persistSession: false } });

const PLATFORMS = ['instagram', 'tiktok', 'youtube', 'x'] as const;
const CATEGORIES = ['crypto', 'beauty', 'fitness', 'fashion', 'food', 'tech', 'gaming', 'travel', 'finance', 'lifestyle'];
const COUNTRIES = ['US', 'GB', 'DE', 'FR', 'BR', 'IN', 'JP', 'KR', 'AE', 'CA', 'AU', 'NG'];
const N_CREATORS = 500;

const rand = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const logFollowers = () => Math.round(10 ** (3 + Math.random() * 4)); // 1k..10M

async function truncate() {
  // children first; SQL via rpc not available, so delete in order
  for (const t of [
    'content_tracking', 'payments', 'campaign_creators', 'campaigns',
    'list_items', 'lists', 'saved_searches',
    'creator_content', 'creator_audience', 'creator_metrics', 'creators',
  ]) {
    await db.from(t).delete().neq('id', '00000000-0000-0000-0000-000000000000');
  }
}

function audienceRows(creatorId: string) {
  const rows: any[] = [];
  const split = (dim: string, buckets: string[]) => {
    let remaining = 1;
    buckets.forEach((b, i) => {
      const share = i === buckets.length - 1 ? remaining : +(Math.random() * remaining * 0.6).toFixed(4);
      remaining = +(remaining - share).toFixed(4);
      rows.push({ creator_id: creatorId, dimension: dim, bucket: b, share });
    });
  };
  split('country', faker.helpers.arrayElements(COUNTRIES, 4));
  split('age', ['13-17', '18-24', '25-34', '35-44', '45+']);
  split('gender', ['female', 'male']);
  split('interest', faker.helpers.arrayElements(CATEGORIES, 3));
  return rows;
}

async function main() {
  console.log('Truncating…');
  await truncate();

  console.log(`Generating ${N_CREATORS} creators…`);
  const creators = Array.from({ length: N_CREATORS }).map(() => {
    const followers = logFollowers();
    const er = +(0.005 + Math.random() * 0.09).toFixed(4);
    const name = faker.person.fullName();
    return {
      platform: rand(PLATFORMS as unknown as string[]),
      handle: faker.internet.username({ firstName: name.split(' ')[0] }).toLowerCase(),
      display_name: name,
      avatar_url: `https://i.pravatar.cc/200?u=${faker.string.uuid()}`,
      bio: faker.lorem.sentence(),
      category: rand(CATEGORIES),
      country: rand(COUNTRIES),
      language: 'en',
      followers,
      engagement_rate: er,
      avg_views: Math.round(followers * (0.1 + Math.random() * 0.4)),
      avg_likes: Math.round(followers * er),
      is_verified: Math.random() < 0.3,
      fake_follower_pct: +(Math.random() * 0.25).toFixed(4),
    };
  });

  const inserted: any[] = [];
  for (let i = 0; i < creators.length; i += 100) {
    const { data, error } = await db.from('creators').insert(creators.slice(i, i + 100)).select('id, followers, engagement_rate, avg_views');
    if (error) throw error;
    inserted.push(...data!);
  }
  console.log(`Inserted ${inserted.length} creators. Adding metrics/audience/content…`);

  for (let i = 0; i < inserted.length; i += 50) {
    const batch = inserted.slice(i, i + 50);
    const metrics: any[] = [], audience: any[] = [], content: any[] = [];
    for (const c of batch) {
      // 12 monthly metric snapshots, slight growth
      for (let m = 11; m >= 0; m--) {
        const f = Math.round(c.followers * (1 - m * (0.005 + Math.random() * 0.01)));
        const d = new Date(); d.setMonth(d.getMonth() - m); d.setDate(1);
        metrics.push({ creator_id: c.id, captured_on: d.toISOString().slice(0, 10), followers: f, engagement_rate: c.engagement_rate, avg_views: c.avg_views });
      }
      audience.push(...audienceRows(c.id));
      for (let k = 0; k < 9; k++) {
        content.push({
          creator_id: c.id,
          thumbnail_url: `https://picsum.photos/seed/${c.id.slice(0, 8)}${k}/400/400`,
          post_url: '#',
          kind: rand(['reel', 'post', 'video', 'story']),
          likes: Math.round(c.avg_views * Math.random()),
          comments: Math.round(c.avg_views * 0.02 * Math.random()),
          posted_at: faker.date.recent({ days: 120 }).toISOString(),
        });
      }
    }
    await db.from('creator_metrics').insert(metrics);
    await db.from('creator_audience').insert(audience);
    await db.from('creator_content').insert(content);
  }

  console.log('Creating demo brand user + workspace…');
  const email = 'demo@modash-clone.test';
  await db.auth.admin.listUsers().then(async ({ data }) => {
    const existing = data.users.find((u) => u.email === email);
    if (existing) await db.auth.admin.deleteUser(existing.id);
  });
  const { data: created, error: uerr } = await db.auth.admin.createUser({
    email, password: 'demo1234', email_confirm: true,
    user_metadata: { full_name: 'Demo Brand', workspace_name: 'Acme Demo' },
  });
  if (uerr) throw uerr;
  // trigger created workspace+profile
  const { data: profile } = await db.from('profiles').select('workspace_id').eq('id', created.user!.id).single();
  const ws = profile!.workspace_id;

  console.log('Creating demo campaigns…');
  const stages = ['shortlisted', 'invited', 'negotiating', 'active', 'delivered', 'paid'];
  for (const [name, status] of [['Summer Launch', 'active'], ['Q4 Affiliate Push', 'active'], ['Brand Ambassadors', 'draft']] as const) {
    const { data: camp } = await db.from('campaigns').insert({
      workspace_id: ws, name, status, budget: faker.number.int({ min: 5000, max: 80000 }),
      brief: faker.lorem.paragraph(), created_by: created.user!.id,
    }).select('id').single();
    const picks = faker.helpers.arrayElements(inserted, 8);
    for (const p of picks) {
      const stage = rand(stages);
      const fee = faker.number.int({ min: 200, max: 5000 });
      const { data: cc } = await db.from('campaign_creators').insert({
        campaign_id: camp!.id, creator_id: p.id, stage, agreed_fee: fee,
        deliverables: [{ type: 'reel', qty: 1 }, { type: 'story', qty: 2 }],
      }).select('id').single();
      if (['delivered', 'paid'].includes(stage)) {
        await db.from('payments').insert({ campaign_creator_id: cc!.id, amount: fee, state: stage === 'paid' ? 'released' : 'escrow_funded', released_at: stage === 'paid' ? new Date().toISOString() : null });
        for (let d = 0; d < 6; d++) {
          const day = new Date(); day.setDate(day.getDate() - d * 3);
          await db.from('content_tracking').insert({ campaign_creator_id: cc!.id, post_url: '#', views: faker.number.int({ min: 1000, max: 200000 }), likes: faker.number.int({ min: 100, max: 20000 }), comments: faker.number.int({ min: 5, max: 800 }), captured_on: day.toISOString().slice(0, 10) });
        }
      }
    }
  }

  console.log('✅ Seed complete. Demo login: demo@modash-clone.test / demo1234');
}

main().catch((e) => { console.error(e); process.exit(1); });
