import { useState } from 'react';
import Container from '@/components/ui/Container';

type Tab = {
  name: string;
  request: string[];
  response: string[];
};

const TABS: Tab[] = [
  {
    name: 'KOL info',
    request: [
      'curl -i -X GET \\',
      "  'https://api.kolio.io/v1/raw/x/kol-info?handle=cryptodefiana' \\",
      "  -H 'Authorization: Bearer <token>'",
    ],
    response: [
      '{',
      '  "id": "1840562301",',
      '  "bio": "DeFi research & alpha. Building @some_protocol ⚡",',
      '  "niche": "DeFi",',
      '  "external_url": "https://kolio.io/k/cryptodefiana",',
      '  "links": [',
      '    {',
      '      "title": "Substack",',
      '      "url": "https://cryptodefiana.xyz"',
      '    }',
      '  ],',
      '  "is_verified": true,',
      '  "real_follower_count": 318000',
      '}',
    ],
  },
  {
    name: 'KOL feed',
    request: [
      'curl -i -X GET \\',
      "  'https://api.kolio.io/v1/raw/x/kol-feed?handle=onchainmaxi' \\",
      "  -H 'Authorization: Bearer <token>'",
    ],
    response: [
      '{',
      '  "items": [',
      '    {',
      '      "text": "Why L2 fees just dropped 60% — a thread 🧵",',
      '      "cashtags": ["$ETH", "$ARB"],',
      '      "is_paid_partnership": true,',
      '      "engagement_rate": 0.041,',
      '      "post_url": "https://x.com/onchainmaxi/status/..."',
      '    }',
      '  ]',
      '}',
    ],
  },
  {
    name: 'Post comments',
    request: [
      'curl -i -X GET \\',
      "  'https://api.kolio.io/v1/raw/x/post-comments?id=1840562301' \\",
      "  -H 'Authorization: Bearer <token>'",
    ],
    response: [
      '{',
      '  "comments": [',
      '    {',
      '      "text": "Finally a clear breakdown of the tokenomics 🙌",',
      '      "reply_count": 2',
      '    },',
      '    {',
      '      "text": "Aped in after this thread. Solid alpha 🔥",',
      '      "reply_count": 0',
      '    }',
      '  ]',
      '}',
    ],
  },
];

function CodeBlock({
  label,
  lines,
  dark,
}: {
  label: string;
  lines: string[];
  dark?: boolean;
}) {
  return (
    <div>
      <p className="mb-2 text-body font-semibold text-foreground">{label}</p>
      <div
        className={`overflow-x-auto rounded-lg p-4 font-mono text-[12px] leading-[1.7] ${
          dark
            ? 'bg-ink text-gray-200'
            : 'border border-gray-200 bg-gray-50 text-foreground'
        }`}
      >
        {lines.map((ln, i) => (
          <div key={i} className="flex gap-4 whitespace-pre">
            <span
              className={`select-none ${dark ? 'text-gray-500' : 'text-gray-400'}`}
            >
              {i + 1}
            </span>
            <span>{ln}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** "No guesswork" — tabbed request/response code samples for 3 endpoints. */
export default function ApiSamples() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="overflow-hidden bg-background py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
            No guesswork. Just real responses.
          </h2>
          <p className="mt-4 text-body text-foreground/70">
            Direct, unprocessed payloads for KOL profiles, feeds, and comments,
            exactly as the source channel returns them. Below are samples of
            three Raw API endpoints to give you a feel for the data. Expand to
            see the full request and response. For every endpoint and parameter,
            head to the{' '}
            <a
              href="/demo-confirmation"
              className="font-semibold text-foreground underline"
            >
              API docs
            </a>
            .
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {TABS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`h-10 rounded-pill px-5 text-body-sm font-semibold transition ${
                  i === active
                    ? 'bg-ink text-white'
                    : 'bg-gray-100 text-foreground/70 hover:bg-gray-200'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CodeBlock label="Request" lines={tab.request} />
            <CodeBlock label="Response" lines={tab.response} dark />
          </div>
        </div>
      </Container>
    </section>
  );
}
