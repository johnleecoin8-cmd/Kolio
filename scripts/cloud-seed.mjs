// Direct-pg cloud seed (no service-role key needed). Run: node scripts/cloud-seed.mjs
import pg from 'pg';
import { faker } from '@faker-js/faker';

// Connection from env — no credentials committed. See cloud-apply.mjs for format.
const CONN = process.env.SEED_DATABASE_URL;
if (!CONN) { console.error('Set SEED_DATABASE_URL (Supabase session-pooler URI).'); process.exit(1); }
const c = new pg.Client({ connectionString: CONN, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 15000 });

const PLATFORMS = ['instagram', 'tiktok', 'youtube', 'x'];
const CATEGORIES = ['crypto', 'beauty', 'fitness', 'fashion', 'food', 'tech', 'gaming', 'travel', 'finance', 'lifestyle'];
const COUNTRIES = ['US', 'GB', 'DE', 'FR', 'BR', 'IN', 'JP', 'KR', 'AE', 'CA', 'AU', 'NG'];
const N = 500;
const rand = (a) => a[Math.floor(Math.random() * a.length)];
const logFollowers = () => Math.round(10 ** (3 + Math.random() * 4));

async function insertMany(table, cols, rows, batchRows, returning = null) {
  const out = [];
  for (let i = 0; i < rows.length; i += batchRows) {
    const slice = rows.slice(i, i + batchRows);
    const params = [];
    const tuples = slice.map((r) => {
      const ph = cols.map((col) => { params.push(r[col]); return '$' + params.length; });
      return '(' + ph.join(',') + ')';
    });
    const sql = `insert into ${table} (${cols.join(',')}) values ${tuples.join(',')}` + (returning ? ` returning ${returning}` : '');
    const res = await c.query(sql, params);
    if (returning) out.push(...res.rows);
  }
  return out;
}

function audienceRows(id) {
  const rows = [];
  const split = (dim, buckets) => {
    let remaining = 1;
    buckets.forEach((b, i) => {
      const share = i === buckets.length - 1 ? remaining : +(Math.random() * remaining * 0.6).toFixed(4);
      remaining = +(remaining - share).toFixed(4);
      rows.push({ creator_id: id, dimension: dim, bucket: b, share });
    });
  };
  split('country', faker.helpers.arrayElements(COUNTRIES, 4));
  split('age', ['13-17', '18-24', '25-34', '35-44', '45+']);
  split('gender', ['female', 'male']);
  split('interest', faker.helpers.arrayElements(CATEGORIES, 3));
  return rows;
}

async function main() {
  await c.connect();
  console.log('connected; truncating app tables…');
  await c.query(`truncate table content_tracking, payments, campaign_creators, campaigns,
    list_items, lists, saved_searches, creator_content, creator_audience, creator_metrics, creators
    restart identity cascade`);

  console.log(`generating ${N} creators…`);
  const seen = new Set();
  const creators = Array.from({ length: N }).map(() => {
    const followers = logFollowers();
    const er = +(0.005 + Math.random() * 0.09).toFixed(4);
    const name = faker.person.fullName();
    let handle = faker.internet.username({ firstName: name.split(' ')[0] }).toLowerCase().replace(/[^a-z0-9_.]/g, '');
    while (seen.has(handle)) handle += Math.floor(Math.random() * 10);
    seen.add(handle);
    return {
      platform: rand(PLATFORMS), handle, display_name: name,
      avatar_url: `https://i.pravatar.cc/200?u=${faker.string.uuid()}`,
      bio: faker.lorem.sentence(), category: rand(CATEGORIES), country: rand(COUNTRIES), language: 'en',
      followers, engagement_rate: er,
      avg_views: Math.round(followers * (0.1 + Math.random() * 0.4)),
      avg_likes: Math.round(followers * er),
      is_verified: Math.random() < 0.3, fake_follower_pct: +(Math.random() * 0.25).toFixed(4),
    };
  });
  const cCols = ['platform','handle','display_name','avatar_url','bio','category','country','language','followers','engagement_rate','avg_views','avg_likes','is_verified','fake_follower_pct'];
  const inserted = await insertMany('creators', cCols, creators, 200, 'id, followers, engagement_rate, avg_views');
  console.log(`inserted ${inserted.length} creators; building metrics/audience/content…`);

  const metrics = [], audience = [], content = [];
  for (const cr of inserted) {
    for (let m = 11; m >= 0; m--) {
      const f = Math.round(cr.followers * (1 - m * (0.005 + Math.random() * 0.01)));
      const d = new Date(); d.setMonth(d.getMonth() - m); d.setDate(1);
      metrics.push({ creator_id: cr.id, captured_on: d.toISOString().slice(0, 10), followers: f, engagement_rate: cr.engagement_rate, avg_views: cr.avg_views });
    }
    audience.push(...audienceRows(cr.id));
    for (let k = 0; k < 9; k++) {
      content.push({
        creator_id: cr.id, thumbnail_url: `https://picsum.photos/seed/${String(cr.id).slice(0, 8)}${k}/400/400`,
        post_url: '#', kind: rand(['reel', 'post', 'video', 'story']),
        likes: Math.round(cr.avg_views * Math.random()), comments: Math.round(cr.avg_views * 0.02 * Math.random()),
        posted_at: faker.date.recent({ days: 120 }).toISOString(),
      });
    }
  }
  await insertMany('creator_metrics', ['creator_id','captured_on','followers','engagement_rate','avg_views'], metrics, 1000);
  await insertMany('creator_audience', ['creator_id','dimension','bucket','share'], audience, 1000);
  await insertMany('creator_content', ['creator_id','thumbnail_url','post_url','kind','likes','comments','posted_at'], content, 800);
  console.log(`metrics ${metrics.length}, audience ${audience.length}, content ${content.length} inserted.`);

  // best-effort demo login user (trigger builds workspace+profile) + campaigns
  let userId = null, ws = null;
  try {
    await c.query(`delete from auth.users where email = 'demo@kolio.io'`);
    const u = await c.query(
      `insert into auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
        raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
        confirmation_token, recovery_token, email_change_token_new, email_change)
       values ('00000000-0000-0000-0000-000000000000', gen_random_uuid(), 'authenticated','authenticated',
        'demo@kolio.io', crypt('demo1234', gen_salt('bf')), now(),
        '{"provider":"email","providers":["email"]}','{"full_name":"Demo Brand","workspace_name":"Acme Demo"}',
        now(), now(), '', '', '', '') returning id`);
    userId = u.rows[0].id;
    await c.query(`insert into auth.identities (provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
       values ($1, $1, json_build_object('sub',$1::text,'email','demo@kolio.io'), 'email', now(), now(), now())
       on conflict do nothing`, [userId]);
    const p = await c.query(`select workspace_id from public.profiles where id = $1`, [userId]);
    ws = p.rows[0]?.workspace_id;
    console.log('demo user ::', userId, 'workspace ::', ws);
  } catch (e) { console.log('demo user skipped ::', e.message); }

  if (ws) {
    const stages = ['shortlisted', 'invited', 'negotiating', 'active', 'delivered', 'paid'];
    for (const [name, status] of [['Summer Launch','active'],['Q4 Affiliate Push','active'],['Brand Ambassadors','draft']]) {
      const camp = await c.query(`insert into campaigns (workspace_id,name,status,budget,brief,created_by) values ($1,$2,$3,$4,$5,$6) returning id`,
        [ws, name, status, faker.number.int({ min: 5000, max: 80000 }), faker.lorem.paragraph(), userId]);
      const cid = camp.rows[0].id;
      for (const p of faker.helpers.arrayElements(inserted, 8)) {
        const stage = rand(stages); const fee = faker.number.int({ min: 200, max: 5000 });
        const cc = await c.query(`insert into campaign_creators (campaign_id,creator_id,stage,agreed_fee,deliverables) values ($1,$2,$3,$4,$5) returning id`,
          [cid, p.id, stage, fee, JSON.stringify([{ type: 'reel', qty: 1 }, { type: 'story', qty: 2 }])]);
        if (['delivered','paid'].includes(stage)) {
          await c.query(`insert into payments (campaign_creator_id,amount,state,released_at) values ($1,$2,$3,$4)`,
            [cc.rows[0].id, fee, stage === 'paid' ? 'released' : 'escrow_funded', stage === 'paid' ? new Date().toISOString() : null]);
        }
      }
    }
    console.log('demo campaigns created.');
  }

  await c.end();
  console.log('✅ cloud seed complete.');
}
main().catch((e) => { console.error('SEED FAILED ::', e.message); process.exit(1); });
