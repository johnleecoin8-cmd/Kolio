import { Link } from 'react-router-dom';
import HeroPanel from '@/components/kit/HeroPanel';
import ToolBlock from '@/components/pages/engagement-rate-calculator/ToolBlock';
import LiveBenchmark from '@/components/pages/engagement-rate-calculator/LiveBenchmark';
import HowItReads from '@/components/pages/engagement-rate-calculator/HowItReads';
import CloseCta from '@/components/pages/engagement-rate-calculator/CloseCta';

/**
 * Kolio /engagement-rate-calculator — rebuilt in the calm-premium language.
 * HeroPanel top → embedded free tool on warm canvas with worked-example card →
 * live network benchmark → signature floating cards → calm closing CTA.
 */
export default function EngagementRateCalculator() {
  return (
    <main>
      <HeroPanel
        eyebrow="Free crypto KOL engagement tool"
        title={
          <>
            See the engagement you can{' '}
            <span className="accent text-gradient-brand">trust</span>
          </>
        }
        subtitle="Measure any crypto KOL's real reach on X before you spend a token — likes, replies and reposts against followers, with a Proof Score on top."
      >
        <a
          href="#tool"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm"
        >
          Try the calculator
        </a>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <div id="tool">
        <ToolBlock />
      </div>

      <LiveBenchmark />
      <HowItReads />
      <CloseCta />
    </main>
  );
}
