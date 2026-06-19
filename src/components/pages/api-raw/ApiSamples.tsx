import { useState } from 'react';
import Container from '@/components/ui/Container';

type Tab = {
  name: string;
  request: string[];
  response: string[];
};

const TABS: Tab[] = [
  {
    name: 'User info',
    request: [
      'curl -i -X GET \\',
      "  'https://api.modash.io/v1/raw/ig/user-info?url=selenagomez' \\",
      "  -H 'Authorization: Bearer <token>'",
    ],
    response: [
      '{',
      '  "pk": "460563723",',
      '  "biography": "by Grace through Faith ✝️ Founder @rarebeauty",',
      '  "category": "Artist",',
      '  "external_url": "https://linktr.ee/selenagomez",',
      '  "bio_links": [',
      '    {',
      '      "title": "",',
      '      "url": "https://linktr.ee/selenagomez"',
      '    }',
      '  ],',
      '  "is_verified": true,',
      '  "follower_count": 422000000',
      '}',
    ],
  },
  {
    name: 'User feed',
    request: [
      'curl -i -X GET \\',
      "  'https://api.modash.io/v1/raw/ig/user-feed?username=cristiano' \\",
      "  -H 'Authorization: Bearer <token>'",
    ],
    response: [
      '{',
      '  "items": [',
      '    {',
      '      "caption": "Training hard and enjoying the moments. 💪🏽",',
      '      "like_and_view_counts_disabled": false,',
      '      "is_paid_partnership": false,',
      '      "carousel_media_count": 3,',
      '      "media_url": "https://instagram...."',
      '    }',
      '  ]',
      '}',
    ],
  },
  {
    name: 'Media comments',
    request: [
      'curl -i -X GET \\',
      "  'https://api.modash.io/v1/raw/ig/media-comments?code=DKsBCXrpQTr' \\",
      "  -H 'Authorization: Bearer <token>'",
    ],
    response: [
      '{',
      '  "comments": [',
      '    {',
      '      "text": "But not on the window 🤦🏼‍♂️ there is a place under the hood",',
      '      "child_comment_count": 2',
      '    },',
      '    {',
      '      "text": "Do it every 5000 miles and never think about it again🤷‍♂️",',
      '      "child_comment_count": 0',
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
            Direct, unprocessed payloads for profiles, feeds, and comments,
            exactly as the source platform returns them. Below are samples of
            three Raw API endpoints to give you a feel for the data. Expand to
            see the full request and response. For every endpoint and parameter,
            head to the{' '}
            <a
              href="https://docs.modash.io/"
              target="_blank"
              rel="noreferrer"
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
