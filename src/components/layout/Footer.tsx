// Kolio dark footer (re-skinned from the modash structural clone).
import { Link } from 'react-router-dom';
import { Music2, Youtube, Linkedin, Send, ShieldCheck, Lock } from 'lucide-react';
import Container from '../ui/Container';

type Col = { title: string; links: { label: string; href: string; internal?: boolean }[] };

const COLUMNS: Col[] = [
  {
    title: 'Company',
    links: [
      { label: 'Blog', href: '/blog', internal: true },
      { label: 'Web3 KOL newsletter', href: '/newsletter', internal: true },
      { label: 'Careers', href: '/careers', internal: true },
      { label: 'Our data', href: '/data', internal: true },
      { label: 'API', href: '/influencer-marketing-api', internal: true },
      { label: 'Podcast', href: '/podcast', internal: true },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Discover KOLs', href: '/features/influencer-discovery', internal: true },
      { label: 'Manage', href: '/features/influencer-management', internal: true },
      { label: 'Track', href: '/features/influencer-tracking', internal: true },
      { label: 'On-chain pay', href: '/influencer-payments', internal: true },
      { label: 'KOL database', href: '/influencer-database', internal: true },
      { label: 'Vetting', href: '/features/influencer-vetting', internal: true },
    ],
  },
  {
    title: 'Free tools',
    links: [
      { label: 'Engagement rate calculator', href: '/engagement-rate-calculator', internal: true },
      { label: 'Find KOLs', href: '/find-influencers', internal: true },
      { label: 'KOL email finder', href: '/features/influencer-email-finder', internal: true },
      { label: 'Average views calculator', href: '/instagram-average-views-calculator', internal: true },
      { label: 'Lookalike tool', href: '/influencer-lookalike-tool', internal: true },
      { label: 'Sponsored content examples', href: '/content-library', internal: true },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Academy', href: '/academy', internal: true },
      { label: 'Customer stories', href: '/customer-stories/nordvpn', internal: true },
      { label: 'Ask a question', href: 'mailto:hello@kolio.io?subject=I%20have%20a%20question...' },
      { label: 'Request a demo', href: '/demo-confirmation', internal: true },
    ],
  },
];

const SOCIALS = [
  { label: 'X', href: 'https://x.com/kolio_io', Icon: Send },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kolio.io', Icon: Music2 },
  { label: 'YouTube', href: 'https://www.youtube.com/@kolio', Icon: Youtube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kolio/', Icon: Linkedin },
];

const LEGAL = [
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'DPA', href: '/legal/data-processing-agreement' },
  { label: 'Cookie Policy', href: '/legal/cookie-policy' },
];

function FooterLink({
  label,
  href,
  internal,
}: {
  label: string;
  href: string;
  internal?: boolean;
}) {
  const cls = 'text-body-sm text-white/70 transition hover:text-white';
  return internal ? (
    <Link to={href} className={cls}>
      {label}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        {/* top: addresses + columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-6">
          {/* addresses */}
          <div className="col-span-2 space-y-8">
            <div>
              <Link to="/" aria-label="Kolio home">
                <span className="text-gradient-brand font-display text-3xl leading-none tracking-tight">
                  Kolio
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-body-sm leading-relaxed text-white/60">
                The web3 influencer marketing platform. Discover, vet, and run
                proof-based campaigns with crypto KOLs — from first contact to
                on-chain payout.
              </p>
            </div>
            <div>
              <div className="mb-1 text-body-sm font-semibold text-white">Seoul, KR</div>
              <p className="text-body-sm leading-relaxed text-white/60">
                Gangnam-gu, Seoul, South Korea
              </p>
            </div>
          </div>

          {/* link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-white/40">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink {...l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* follow + badges */}
        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 text-eyebrow font-semibold uppercase tracking-wide text-white/40">
              Follow us
            </div>
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 transition hover:bg-white/20"
                >
                  <s.Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-eyebrow font-semibold uppercase tracking-wide text-white/40">
              Your data&apos;s in safe hands
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 rounded-sm bg-white/10 px-3 py-2 text-body-sm text-white/80">
                <ShieldCheck className="h-4 w-4" /> SOC 2 Type II
              </span>
              <span className="flex items-center gap-2 rounded-sm bg-white/10 px-3 py-2 text-body-sm text-white/80">
                <Lock className="h-4 w-4" /> On-chain escrow
              </span>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" aria-label="Kolio home">
            <span className="text-gradient-brand font-display text-2xl leading-none tracking-tight">
              Kolio
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-body-sm text-white/60 transition hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="text-body-sm text-white/40">
            © 2026 Kolio. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
