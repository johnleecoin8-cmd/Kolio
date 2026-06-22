import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import AcademyLessons from '@/components/pages/academy/AcademyLessons';
import AcademyTracks from '@/components/pages/academy/AcademyTracks';
import AcademyClose from '@/components/pages/academy/AcademyClose';

/** Kolio Academy — calm-premium rebuild. Learn to run proof-based crypto KOL
 *  campaigns: hero panel, floating lesson cards, learning tracks, calm close. */
export default function Academy() {
  return (
    <main>
      <HeroPanel
        eyebrow="Kolio Academy · free for everyone"
        title={
          <>
            Learn to run crypto KOL campaigns you can{' '}
            <span className="accent text-gradient-brand">prove</span>
          </>
        }
        subtitle="Short, practical lessons on vetting KOLs, reading on-chain reach, structuring escrow, and proving real return — taught the way Kolio runs campaigns."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Start learning <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <AcademyLessons />
      <AcademyTracks />
      <AcademyClose />
    </main>
  );
}
