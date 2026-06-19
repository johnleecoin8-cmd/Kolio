import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

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

type Token = { text: string; cls: string };

/** Lightweight JSON/curl tokenizer for syntax-highlight coloring. */
function highlight(line: string, dark: boolean): Token[] {
  const out: Token[] = [];
  const keyCls = dark ? 'text-sky-200' : 'text-[#1d4ed8]';
  const strCls = dark ? 'text-emerald-400' : 'text-emerald-600';
  const numCls = dark ? 'text-amber-400' : 'text-[#b45309]';
  const boolCls = dark ? 'text-sky-400' : 'text-[#2563eb]';
  const plain = dark ? 'text-slate-200' : 'text-slate-700';

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
  code,
  dark,
}: {
  label: string;
  code: string;
  dark?: boolean;
}) {
  const lines = code.split('\n');
  return (
    <div>
      <p className="mb-3 text-body-sm font-semibold text-foreground">{label}</p>
      <div
        className={cn(
          'overflow-x-auto rounded-lg p-5 font-mono text-[0.8125rem] leading-[1.7]',
          dark
            ? 'bg-[#0d1424] text-slate-200'
            : 'border border-black/10 bg-white text-slate-700',
        )}
      >
        <pre className="whitespace-pre">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-5">
              <span
                className={cn(
                  'w-5 shrink-0 select-none text-right',
                  dark ? 'text-slate-500' : 'text-slate-400',
                )}
              >
                {i + 1}
              </span>
              <span>
                {line
                  ? highlight(line, !!dark).map((t, j) => (
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

/** "No guesswork. Just real responses." — request + response code panels. */
export default function CodeSample() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground">
            No guesswork. Just real responses.
          </h2>
          <p className="mt-4 text-body text-foreground/75">
            See how a Discovery search looks end-to-end. Below is a sample of the
            endpoint to give you a feel for the data — vetted KOLs ranked by audience
            quality, not raw follower count. For every endpoint and parameter, head to the{' '}
            <a href="/demo-confirmation" className="font-semibold text-ink underline">
              API docs
            </a>
            .
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-background-soft p-5 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <CodeBlock label="Request" code={REQUEST} />
            <CodeBlock label="Response" code={RESPONSE} dark />
          </div>
        </div>
      </Container>
    </section>
  );
}
