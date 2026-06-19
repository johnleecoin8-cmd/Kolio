import Container from '@/components/ui/Container';

const REQUEST = `curl -X POST https://api.modash.io/v1/instagram/search \\
 -d '{
  "page": 0,
  "calculationMethod": "median",
  "sort": {
    "field": "followers",
    "direction": "desc"
  },
  "filter": {
    "influencer": {
      "followers": {
        "min": 10000000
      },
      "location": [
        148838
      ]
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
        "engagementRate": 0.00315175722495829,
        "engagements": 517148,
        "followers": 164802435,
        "fullname": "Cardi B",
        "url": "https://www.instagram.com/iamcardib/",
        "username": "iamcardib",
        "isVerified": true,
        "isPrivate": false
      }
    }
  ]
}`;

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
      <p
        className={`mb-3 text-body-sm font-semibold ${
          dark ? 'text-foreground/60' : 'text-foreground/60'
        }`}
      >
        {label}
      </p>
      <div
        className={`overflow-x-auto rounded-xl p-5 font-mono text-[0.8125rem] leading-relaxed ${
          dark ? 'bg-[#0f1729] text-gray-100' : 'bg-white text-gray-800 shadow-nav'
        }`}
      >
        <pre className="whitespace-pre">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span
                className={`select-none text-right ${
                  dark ? 'text-gray-500' : 'text-gray-400'
                }`}
                style={{ minWidth: '1.5rem' }}
              >
                {i + 1}
              </span>
              <span>{line || ' '}</span>
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
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-display text-h3 leading-tight text-foreground md:text-h2">
            No guesswork. Just real responses.
          </h2>
          <p className="mt-4 text-body text-foreground/75">
            See how a Discovery search looks end-to-end. Below is a sample of the
            endpoint to give you a feel for the data. Expand to see the full request
            and response. For every endpoint and parameter, head to the{' '}
            <a
              href="https://docs.modash.io/"
              className="font-semibold text-ink underline"
            >
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
