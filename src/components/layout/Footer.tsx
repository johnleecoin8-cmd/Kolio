import { Link } from 'react-router-dom';
import { Music2, Youtube, Send } from 'lucide-react';
import Container from '@/components/ui/Container';

const COLS = [
  { title: 'Platform', links: [['Discover KOLs', '/influencer-database'], ['Vetting', '/features/influencer-vetting'], ['Analytics', '/features/influencer-analytics'], ['On-chain pay', '/influencer-payments'], ['Pricing', '/pricing']] },
  { title: 'Company', links: [['Blog', '/blog'], ['Customers', '/customer-stories/nordvpn'], ['Careers', '/careers'], ['Podcast', '/podcast'], ['Our data', '/data']] },
  { title: 'Free tools', links: [['Engagement checker', '/engagement-rate-calculator'], ['Reach checker', '/instagram-average-views-calculator'], ['Find KOLs', '/find-influencers/united-states/fitness'], ['API', '/influencer-marketing-api']] },
];

export default function Footer() {
  return (
    <footer className="panel grain relative overflow-hidden">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-20">
          <div>
            <Link to="/" className="text-grad font-display text-3xl font-medium tracking-tight">Kolio</Link>
            <p className="mt-4 max-w-xs text-body-sm leading-relaxed text-on-dark/55">
              The proof layer for crypto KOL marketing. Discover, vet, and pay creators with on-chain proof, from first contact to settled payout.
            </p>
            <div className="mt-6 flex gap-3">
              {[Send, Youtube, Music2].map((Icon, i) => (
                <span key={i} className="grid h-9 w-9 place-items-center rounded-pill bg-white/8 text-on-dark/80 transition hover:bg-white/15"><Icon className="h-4 w-4" /></span>
              ))}
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="text-body-sm font-medium text-on-dark/90">{c.title}</div>
              <ul className="mt-4 space-y-3">
                {c.links.map(([label, to]) => (
                  <li key={label}><Link to={to} className="text-body-sm text-on-dark/55 transition hover:text-on-dark">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-body-sm text-on-dark/45 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Kolio. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/legal/privacy-policy" className="hover:text-on-dark/80">Privacy</Link>
            <Link to="/legal/privacy-policy" className="hover:text-on-dark/80">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
