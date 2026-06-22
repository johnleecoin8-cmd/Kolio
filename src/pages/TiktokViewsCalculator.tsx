import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import HeroCalculator from '@/components/pages/tiktok-views-calculator/HeroCalculator';
import LiveTiktokBenchmark from '@/components/pages/tiktok-views-calculator/LiveTiktokBenchmark';
import CalmClose from '@/components/pages/tiktok-views-calculator/CalmClose';

/** Kolio — TikTok average-views calculator for vetting crypto KOLs.
 *  Calm-premium language: dark hero panel, white calculator with a floating
 *  result card, live benchmark, and a calm closing CTA. */
export default function TiktokViewsCalculator() {
  return (
    <main>
      <HeroPanel
        eyebrow="Free crypto KOL vetting tool"
        title={
          <>
            Know a TikTok KOL&apos;s real views before you{' '}
            <span className="text-gradient-brand">book</span>
          </>
        }
        subtitle="Look past follower counts. Kolio reads verified average views and engagement on TikTok so your campaign spend follows real reach, not vanity."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm"
        >
          Find KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <HeroCalculator />
      <LiveTiktokBenchmark />
      <CalmClose />
    </main>
  );
}
