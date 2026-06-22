import Container from '@/components/ui/Container';

type Episode = {
  title: string;
  blurb: string;
  guest: string;
  guestRole: string;
  href: string;
};

const FEATURED: Episode = {
  title:
    'The Human Side Of Crypto KOL Relationships With George Hu (Arbitrum)',
  blurb:
    "Arbitrum's ecosystem team runs six-figure KOL campaigns without spray-and-pray. George breaks down how they vet KOLs on real reach instead of follower counts, why they negotiate every deal personally, and how on-chain attribution proves which creators actually drove conversions.",
  guest: 'George Hu',
  guestRole: 'Head of Community @ Arbitrum',
  href: '/demo-confirmation',
};

const EPISODES: Episode[] = [
  {
    title:
      'Scaling A Top-10 L1 With KOLs With Rugile Petraitis (Polygon)',
    blurb:
      'As Director of Marketing at Polygon, Rugile lives and breathes ecosystem growth. In this conversation she shares the unvarnished truth about what it takes to make crypto KOL marketing a repeatable, measurable channel — and the vetting mistakes that burn most teams.',
    guest: 'Rugile Petraitis',
    guestRole: 'Director of Marketing @ Polygon',
    href: '/demo-confirmation',
  },
  {
    title:
      'The Mindset Shift You Need For KOL Campaigns That Convert With Siim Saar (Sui)',
    blurb:
      'Sui growth lead Siim Saar joins the pod to talk campaign measurement. In a surprising twist, he argues that creative fit and audience quality move the needle far more than raw follower count — and how Kolio attribution makes that case with hard numbers.',
    guest: 'Siim Saar',
    guestRole: 'Growth & Measurement Lead @ Sui',
    href: '/demo-confirmation',
  },
  {
    title:
      'Building KOL Ops From Zero To 6,000 Creators With Andrei Gigirtu (Phantom)',
    blurb:
      'Phantom’s ops lead Andrei Gigirtu shares how he built KOL infrastructure from scratch — from a handful of one-off deals to a thriving network of 6,000 vetted creators, all managed through escrow and attribution instead of spreadsheets and DMs.',
    guest: 'Andrei Gigirtu',
    guestRole: 'Head of Marketing Ops @ Phantom',
    href: '/demo-confirmation',
  },
  {
    title:
      'Intro To KOL-Led Launch Campaigns With Fabian Ouwehand (Magic Eden)',
    blurb:
      'When a token or NFT collection launches, the first 48 hours decide everything. Fabian shares how Magic Eden coordinates dozens of KOLs across X and Telegram simultaneously around a TGE — and how they keep messaging compliant while moving fast.',
    guest: 'Fabian Ouwehand',
    guestRole: 'Senior Director, Launch Marketing @ Magic Eden',
    href: '/demo-confirmation',
  },
  {
    title:
      'KOL Marketing In A Highly Regulated Market With Maia Pedro (Bitpanda)',
    blurb:
      'Maia Pedro is building the KOL marketing team at Bitpanda from scratch. We talk about running crypto creator campaigns inside a licensed exchange — disclosure requirements, briefing KOLs on compliant messaging, and proving ROI to a risk-averse leadership team.',
    guest: 'Maia Pedro',
    guestRole: 'KOL Marketing Team Lead @ Bitpanda',
    href: '/demo-confirmation',
  },
  {
    title:
      'KOL Outreach At Scale: Lessons From 1M Messages With Nikola Sokolov',
    blurb:
      "Nikola Sokolov shares what his team learned sending a million outreach messages to crypto creators — what gets replies, what gets ignored, and why proof-based targeting beats blasting every handle with a big follower count.",
    guest: 'Nikola Sokolov',
    guestRole: 'Founder @ kol.club',
    href: '/demo-confirmation',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');
}

function GuestByline({ ep, dark = false }: { ep: Episode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-white text-eyebrow font-bold">
        {initials(ep.guest)}
      </span>
      <div>
        <p
          className={`text-body-sm font-bold leading-tight ${
            dark ? 'text-white' : 'text-foreground'
          }`}
        >
          {ep.guest}
        </p>
        <p
          className={`text-eyebrow leading-tight ${
            dark ? 'text-white/50' : 'text-foreground/50'
          }`}
        >
          {ep.guestRole}
        </p>
      </div>
    </div>
  );
}

function Thumb({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-md bg-gradient-brand p-6">
      <span className="line-clamp-3 text-center font-display text-body-md font-bold leading-snug text-white">
        {label}
      </span>
    </div>
  );
}

export default function Episodes() {
  return (
    <section id="episodes" className="bg-gray-50 py-16 md:py-24">
      <Container>
        <span className="eyebrow">Latest episodes</span>
        <h2 className="mt-3 display-lg font-display text-h4 md:text-h3 text-foreground">
          Inside the campaigns that converted
        </h2>

        {/* Featured — dark on-chain lead card, sets the hierarchy */}
        <a
          href={FEATURED.href}
          className="surface-onchain group mt-10 grid grid-cols-1 items-center gap-8 rounded-lg p-6 no-underline md:grid-cols-2 md:p-8"
        >
          <Thumb label={FEATURED.guest} />
          <div>
            <span className="chip chip-onchain">Featured episode</span>
            <h3 className="mt-4 font-display text-h4 font-bold leading-tight tracking-tight text-white transition group-hover:text-coral">
              {FEATURED.title}
            </h3>
            <p className="mt-4 text-body-sm text-white/70">{FEATURED.blurb}</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <GuestByline ep={FEATURED} dark />
            </div>
          </div>
        </a>

        {/* Grid — premium white cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EPISODES.map((ep) => (
            <a
              key={ep.title}
              href={ep.href}
              className="card-kit group flex flex-col overflow-hidden no-underline transition hover:-translate-y-0.5"
            >
              <div className="p-3 pb-0">
                <Thumb label={ep.guest} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-body-md font-bold leading-snug text-foreground transition group-hover:text-brand">
                  {ep.title}
                </h3>
                <p className="mt-3 flex-1 text-body-sm text-foreground/65">
                  {ep.blurb}
                </p>
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <GuestByline ep={ep} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Platform buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/demo-confirmation"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-brand px-6 text-body-sm font-semibold text-white transition hover:opacity-90"
          >
            Watch on YouTube
          </a>
          <a
            href="/demo-confirmation"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-hairline bg-white px-6 text-body-sm font-semibold text-foreground transition hover:bg-gray-50"
          >
            Listen on Spotify
          </a>
        </div>
      </Container>
    </section>
  );
}
