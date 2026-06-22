import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import ContentGrid from '@/components/pages/content-library/ContentGrid';
import LibraryClose from '@/components/pages/content-library/LibraryClose';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

/** Kolio content library — calm-premium rebuild: dark HeroPanel, floating
 *  content-grid of scored campaign posts, live creator rail, calm close. */
export default function ContentLibrary() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="A library of proof, not promises"
        title={<>See the content crypto KOLs actually <span className="text-gradient-brand">shipped</span></>}
        subtitle="Browse real posts from live Kolio briefs — every thread, stream, and explainer carries its measured engagement and on-chain attribution."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm"
        >
          Find KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <ContentGrid />

      <LiveCreatorRail
        title="Creators behind the standout content"
        subtitle="A live slice of the Kolio index. Open any card for the full proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />

      <LibraryClose />
    </main>
  );
}
