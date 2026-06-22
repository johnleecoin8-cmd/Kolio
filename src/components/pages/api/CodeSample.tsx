import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import { ArrowUpRight } from 'lucide-react';

const REQUEST = `curl -X POST https://api.kolio.io/v1/x/search \\
 -d '{
  "page": 0,
  "calculationMethod": "median",
  "sort": {
    "field": "audienceQuality",
    "direction": "desc"
  },
  "filter": {
    "kol": {
      "niche": [
        "defi"
      ],
      "followers": {
        "min": 100000
      },
      "audienceQuality": {
        "min": 0.8
      }
    }
  }
}'`;

const RESPONSE = `{
  "error": false,
  "total": 1,
  "directs": [],
  "lookalikes": [
    {
      "userId": "1436859892",
      "profile": {
        "engagementRate": 0.0421,
        "engagements": 18420,
        "followers": 438201,
        "audienceQuality": 0.91,
        "niche": "defi",
        "fullname": "0xCipher",
        "url": "https://x.com/0xcipher",
        "username": "0xcipher",
        "isVerified": true,
        "fakeFollowerScore": 0.04
      }
    }
  ]
}`;

/** Endpoint cards rendered above the live terminal. */
const ENDPOINTS = [
  {
    method: 'GET',
    path: '/v1/kol/search',
    desc: 'Proof-based KOL discovery across X, YouTube, TikTok, and Telegram.',
  },
  {
    method: 'GET',
    path: '/v1/kol/{id}/report',
    desc: 'Engagement rate, audience overlap, and fake-follower scoring.',
  },
  {
    method: 'POST',
    path: '/v1/attribution/onchain',
    desc: 'Tie social activity to wallet conversions and post-level ROI.',
  },
];

type Token = { text: string; cls: string };

/** Lightweight JSON/curl tokenizer for syntax-highlight coloring (dark terminal palette). */
function highlight(line: string): Token[] {
  const out: Token[] = [];
  const keyCls = 'text-sky-300';
  const strCls = 'text-emerald-400';
  const numCls = 'text-amber-400';
  const boolCls = 'text-sky-400';
  const plain = 'text-slate-300';

  // curl line — color the URL green, rest plain
  if (line.includes('curl')) {
    const m = line.match(/(https?:[^\s]*)/);
    if (m) {
      const idx = line.indexOf(m[1]);
      out.push({ text: line.slice(0, idx), cls: plain });
      out.push({ text: m[1], cls: strCls });
      out.push({ text: line.slice(idx + m[1].length), cls: plain });
      return out;
    }
    return [{ text: line, cls: plain }];
  }

  // tokenize JSON-ish content
  const re = /("(?:[^"\\]|\\.)*"\s*:)|("(?:[^"\\]|\\.)*")|(\btrue\b|\bfalse\b|\bnull\b)|(-?\d+\.?\d*)|([\s\S])/g;
  let m: RegExpExecArray | null;
  let buf = '';
  const flush = () => {
    if (buf) {
      out.push({ text: buf, cls: plain });
      buf = '';
    }
  };
  while ((m = re.exec(line))) {
    if (m[1]) {
      flush();
      out.push({ text: m[1], cls: keyCls });
    } else if (m[2]) {
      flush();
      out.push({ text: m[2], cls: strCls });
    } else if (m[3]) {
      flush();
      out.push({ text: m[3], cls: boolCls });
    } else if (m[4]) {
      flush();
      out.push({ text: m[4], cls: numCls });
    } else {
      buf += m[5];
    }
  }
  flush();
  return out;
}

function CodeBlock({
  label,
  badge,
  code,
  className,
}: {
  label: string;
  badge?: React.ReactNode;
  code: string;
  className?: string;
}) {
  const lines = code.split('\n');
  return (
    <div className={cn('rounded-xl bg-black/30 ring-1 ring-white/10', className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-400">
          {label}
        </p>
        {badge}
      </div>
      <div className="overflow-x-auto p-4 font-mono-tnum text-[0.8125rem] leading-[1.7]">
        <pre className="whitespace-pre">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-5">
              <span className="w-5 shrink-0 select-none text-right text-slate-600">
                {i + 1}
              </span>
              <span>
                {line
                  ? highlight(line).map((t, j) => (
                      <span key={j} className={t.cls}>
                        {t.text}
                      </span>
                    ))
                  : ' '}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

/** "No guesswork. Just real responses." — dark on-chain terminal + endpoint cards. */
export default function CodeSample() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">Live API</span>
          <h2 className="display-lg mt-3 font-display text-[2rem] text-ink md:text-[2.75rem]">
            No guesswork. Just real responses.
          </h2>
          <p className="mt-4 text-body text-foreground/75">
            See a Discovery search end-to-end — vetted KOLs ranked by audience quality,
            not raw follower count. For every endpoint and parameter, head to the{' '}
            <a href="/demo-confirmation" className="font-semibold text-brand underline">
              API docs
            </a>
            .
          </p>
        </div>

        {/* endpoint cards */}
        <div className="mx-auto mt-12 grid max-w-[1040px] gap-4 md:grid-cols-3">
          {ENDPOINTS.map((e) => (
            <div key={e.path} className="card-kit p-5">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'chip',
                    e.method === 'POST' ? 'chip-brand' : 'chip-ink',
                  )}
                >
                  {e.method}
                </span>
                <code className="font-mono-tnum text-[0.8125rem] font-medium text-ink">
                  {e.path}
                </code>
              </div>
              <p className="mt-3 text-body-sm text-foreground/70">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* dark on-chain terminal — the focal punctuation surface */}
        <div className="surface-onchain mx-auto mt-8 max-w-[1040px] overflow-hidden rounded-2xl p-5 md:p-8">
          {/* terminal chrome */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>
              <span className="font-mono-tnum text-[0.75rem] text-slate-400">
                api.kolio.io/v1/x/search
              </span>
            </div>
            <span className="chip chip-onchain">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
              LIVE
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <CodeBlock label="Request" code={REQUEST} />
            <CodeBlock
              label="Response"
              className="glow-brand"
              badge={
                <span className="font-mono-tnum text-[0.7rem] font-semibold text-emerald-400">
                  200 OK · 142ms
                </span>
              }
              code={RESPONSE}
            />
          </div>

          <a
            href="/demo-confirmation"
            className="mt-6 inline-flex items-center gap-1.5 text-body-sm font-semibold text-white/90 transition hover:text-white"
          >
            Explore the full reference
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </Container>
    </section>
  );
}
