import pg from 'pg';
import fs from 'node:fs';
// Connection comes from env so no credentials live in the repo.
// SEED_DATABASE_URL = Supabase Session-pooler URI (IPv4), e.g.
//   postgresql://postgres.<ref>:<urlencoded-pw>@aws-1-<region>.pooler.supabase.com:5432/postgres
const CONN = process.env.SEED_DATABASE_URL;
if (!CONN) { console.error('Set SEED_DATABASE_URL (Supabase session-pooler URI).'); process.exit(1); }
const c = new pg.Client({ connectionString: CONN, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 15000 });
await c.connect();
console.log('connected');
for (const f of ['0001_init.sql','0002_search_rpc.sql','0003_catalog_anon_read.sql']) {
  const sql = fs.readFileSync('supabase/migrations/'+f,'utf8');
  try { await c.query(sql); console.log('APPLIED', f); }
  catch(e){ console.log('ERR', f, '::', e.message); }
}
const t = await c.query(`select table_name from information_schema.tables where table_schema='public' order by 1`);
console.log('TABLES ::', t.rows.map(r=>r.table_name).join(', '));
await c.end();
