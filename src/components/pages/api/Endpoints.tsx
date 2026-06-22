import Container from '@/components/ui/Container';

type Endpoint = {
  method: 'GET' | 'POST';
  path: string;
  title: string;
  desc: string;
  fields: string[];
};

const endpoints: Endpoint[] = [
  {
    method: 'GET',
    path: '/v1/kols',
    title: 'Discovery',
    desc: 'Search the vetted index across X, YouTube, Telegram, and TikTok. Filter by niche, chain, region, and audience quality.',
    fields: ['proof_score', 'real_followers', 'niche', 'chains'],
  },
  {
    method: 'GET',
    path: '/v1/kols/:id/proof',
    title: 'Proof Score',
    desc: 'Pull the full authenticity report: real-follower share, engaged-holder ratio, and fake-follower scoring.',
    fields: ['real_ratio', 'engaged_holders', 'fake_ratio', 'breakdown'],
  },
  {
    method: 'POST',
    path: '/v1/escrow',
    title: 'Escrow',
    desc: 'Fund a campaign into USDC escrow and release on delivery. Fully programmatic, settled on-chain.',
    fields: ['amount_usdc', 'release_on', 'tx_hash', 'state'],
  },
  {
    method: 'GET',
    path: '/v1/attribution',
    title: 'Attribution',
    desc: 'Tie social activity to wallet outcomes — referral clicks, conversions, and post-level on-chain ROI.',
    fields: ['wallets', 'volume_usd', 'roi', 'window'],
  },
];

/** Endpoint cards: .card-kit grid with mono method/path and response fields. */
export default function Endpoints() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow">Endpoints</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            Four endpoints, one <span className="accent text-gradient-brand">proof rail</span>
          </h2>
          <p className="mt-5 text-body-md text-foreground/60">
            Discover, verify, pay, and attribute — every call returns evidence, not estimates. Typed SDKs for TypeScript,
            Python, and Go.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {endpoints.map((e) => (
            <div key={e.path} className="card-kit shadow-float-sm rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="flex items-center gap-2.5">
                <span
                  className={`rounded px-2 py-1 text-eyebrow font-bold ${
                    e.method === 'GET' ? 'bg-coral-bg text-brand' : 'bg-brand text-white'
                  }`}
                >
                  {e.method}
                </span>
                <code className="font-mono-tnum text-body-sm text-foreground/70">{e.path}</code>
              </div>
              <h3 className="mt-5 text-body-lg font-semibold text-foreground">{e.title}</h3>
              <p className="mt-2 text-body-sm leading-snug text-foreground/60">{e.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-200 pt-5">
                {e.fields.map((f) => (
                  <span key={f} className="rounded-pill bg-gray-100 px-2.5 py-1 font-mono-tnum text-eyebrow text-foreground/55">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
