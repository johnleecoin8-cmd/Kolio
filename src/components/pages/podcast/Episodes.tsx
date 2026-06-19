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

function GuestByline({ ep }: { ep: Episode }) {
  const initials = ep.guest
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-white text-eyebrow font-bold">
        {initials}
      </span>
      <div>
        <p className="text-body-sm font-bold text-foreground leading-tight">
          {ep.guest}
        </p>
        <p className="text-eyebrow text-foreground/50 leading-tight">
          {ep.guestRole}
        </p>
      </div>
    </div>
  );
}

function Thumb({ label }: { label: string }) {
  return (
    <div className="flex w-full items-center justify-center rounded-lg aspect-video bg-gradient-brand p-6">
      <span className="text-center font-sans font-bold text-white text-body-md leading-snug line-clamp-3">
        {label}
      </span>
    </div>
  );
}

export default function Episodes() {
  return (
    <section id="episodes" className="bg-background pb-16 md:pb-24">
      <Container>
        {/* Featured */}
        <a
          href={FEATURED.href}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start no-underline group"
        >
          <Thumb label={FEATURED.guest} />
          <div>
            <h3 className="font-sans font-bold text-h4 leading-tight tracking-tight text-foreground group-hover:text-blue transition">
              {FEATURED.title}
            </h3>
            <p className="mt-4 text-body-sm text-foreground/70">
              {FEATURED.blurb}
            </p>
            <div className="mt-5">
              <GuestByline ep={FEATURED} />
            </div>
          </div>
        </a>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {EPISODES.map((ep) => (
            <a
              key={ep.title}
              href={ep.href}
              className="flex flex-col no-underline group"
            >
              <Thumb label={ep.guest} />
              <h3 className="mt-4 font-sans font-bold text-body-md leading-snug text-foreground group-hover:text-blue transition">
                {ep.title}
              </h3>
              <p className="mt-3 text-body-sm text-foreground/70 flex-1">
                {ep.blurb}
              </p>
              <div className="mt-4">
                <GuestByline ep={ep} />
              </div>
            </a>
          ))}
        </div>

        {/* Platform buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/demo-confirmation"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-sm bg-blue text-white text-body-sm font-semibold transition hover:opacity-90"
          >
            Watch on YouTube
          </a>
          <a
            href="/demo-confirmation"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-sm bg-white text-navy border border-gray-300 text-body-sm font-semibold transition hover:bg-gray-50"
          >
            Listen on Spotify
          </a>
        </div>
      </Container>
    </section>
  );
}
