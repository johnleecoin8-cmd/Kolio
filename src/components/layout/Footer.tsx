// Rebuilt 1:1 from modash.io (_capture/pages/home). Dark footer.
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const LOGO =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6825fd2f81791b56a1c55a5b_modash_logo.svg';
const ICON_TIKTOK =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/683ff0a5379ef3556e28bba8_icon_TikTok.png';
const ICON_YOUTUBE =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/683ff0a5542d5cc64d73344f_icon_Youtube.png';
const ICON_LINKEDIN =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/683ff0dec3a41368118e3bca_icon_linkedin.png';
const BADGE_ISO =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/699583138e25d8d646d2ae79_ic_iso.avif';
const BADGE_GDPR =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6995831c1bb436470d41308f_ic_gdpr.avif';

type Col = { title: string; links: { label: string; href: string; internal?: boolean }[] };

const COLUMNS: Col[] = [
  {
    title: 'Company',
    links: [
      { label: 'Blog', href: '/blog', internal: true },
      { label: 'ROI newsletter', href: '/newsletter', internal: true },
      { label: 'Careers', href: '/careers', internal: true },
      { label: 'Our data', href: '/data', internal: true },
      { label: 'API', href: '/influencer-marketing-api', internal: true },
      { label: 'Switch to Modash', href: '/switch-to-modash', internal: true },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'Discover', href: '/features/influencer-discovery', internal: true },
      { label: 'Manage', href: '/features/influencer-management', internal: true },
      { label: 'Track', href: '/features/influencer-tracking', internal: true },
      { label: 'Pay', href: '/influencer-payments', internal: true },
      { label: 'Shopify integration', href: '/shopify', internal: true },
      { label: 'Email integration', href: '/features/inbox', internal: true },
    ],
  },
  {
    title: 'More tools',
    links: [
      { label: 'Fake follower check', href: 'https://www.modash.io/fake-follower-check' },
      { label: 'Strategy breakdowns', href: 'https://www.modash.io/breakdowns/' },
      { label: 'Engagement rate calculator', href: 'https://www.modash.io/engagement-rate-calculator' },
      { label: 'Find influencers', href: 'https://www.modash.io/find-influencers' },
      { label: 'Influencer email finder', href: 'https://www.modash.io/instagram-email-finder' },
      { label: 'Average views calculator', href: 'https://www.modash.io/instagram-average-views-calculator' },
      { label: 'Sponsored content examples', href: 'https://www.modash.io/content-library' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Product tour', href: '/product-tour', internal: true },
      { label: 'Help center', href: 'https://help.modash.io/en/' },
      { label: 'Ask a question', href: 'mailto:Hello@modash.io?subject=I%20have%20a%20question...' },
      { label: 'Request a demo', href: 'https://www.modash.io/book-demo' },
    ],
  },
];

const SOCIALS = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@modash.io', icon: ICON_TIKTOK },
  { label: 'YouTube', href: 'https://www.youtube.com/@Modash.official', icon: ICON_YOUTUBE },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/modash/', icon: ICON_LINKEDIN },
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
              <div className="mb-1 text-body-sm font-semibold text-white">Toronto, CA</div>
              <p className="text-body-sm leading-relaxed text-white/60">
                140 Simcoe St, Toronto ON M5H 4E9
                <br />
                Canada
              </p>
            </div>
            <div>
              <div className="mb-1 text-body-sm font-semibold text-white">Tallinn, EE</div>
              <p className="text-body-sm leading-relaxed text-white/60">
                Aia tn 10a-9, 10111 Tallinn, Estonia
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
                  <img src={s.icon} alt={s.label} className="h-4 w-4 object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-eyebrow font-semibold uppercase tracking-wide text-white/40">
              Your data&apos;s in safe hands
            </div>
            <div className="flex items-center gap-4">
              <img src={BADGE_ISO} alt="ISO27001" className="h-12 w-auto" />
              <img src={BADGE_GDPR} alt="GDPR" className="h-12 w-auto" />
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <Link to="/">
            <img src={LOGO} alt="Modash" className="h-7 w-auto opacity-90" />
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
            © 2026 Modash OÜ. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
