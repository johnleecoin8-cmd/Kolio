import Container from '@/components/ui/Container';

const STEPS = [
  {
    n: '01',
    title: 'Collection',
    body: 'We continuously index every public crypto KOL profile across X, YouTube, TikTok, and Telegram — pulling bios, captions, post content, engagement, and on-chain wallet activity tied to their campaigns.',
    bg: 'bg-background-soft',
    z: 'z-30',
  },
  {
    n: '02',
    title: 'Organization',
    body: 'Scattered web3 signals are unified into a single KOL profile. Doing this by hand across hundreds of crypto accounts would take your team weeks per shortlist — Kolio does it in seconds.',
    bg: 'bg-purple-light',
    z: 'z-20',
  },
  {
    n: '03',
    title: 'Analysis',
    body: 'Each profile runs through machine-learning models built for crypto audiences: real reach, follower authenticity, bot detection, engagement quality, and niche fit (DeFi, NFTs, L1/L2, trading, gaming). You vet and verify KOLs before a single dollar of budget moves on-chain.',
    bg: 'bg-purple',
    z: 'z-10',
  },
];

/** How it works — 3 numbered steps shown as overlapping color cards. */
export default function HowItWorks() {
  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <h2 className="mb-12 text-center font-sans text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`relative flex flex-col rounded-3xl p-8 md:p-10 ${s.bg} ${s.z} ${
                i > 0 ? 'md:-ml-6' : ''
              }`}
            >
              <div className="font-display text-[2.5rem] leading-none text-foreground">
                {s.n}
              </div>
              <div className="mt-5 text-[1.75rem] font-bold leading-tight text-foreground">
                {s.title}
              </div>
              <p className="mt-4 text-body-sm text-foreground/80">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
