import CareersHero from '@/components/pages/careers/CareersHero';
import MissionBanner from '@/components/pages/careers/MissionBanner';
import MeetTheTeam from '@/components/pages/careers/MeetTheTeam';
import AnnualOffsite from '@/components/pages/careers/AnnualOffsite';
import OpenRoles from '@/components/pages/careers/OpenRoles';
import CareersCTA from '@/components/pages/careers/CareersCTA';

/** Kolio careers — calm-premium rebuild (phantom.com structure, Kolio brand):
 *  HeroPanel hero, warm mission + count-up stats, floating discipline cards,
 *  floating value cards, branded role list, calm HeroPanel-style close. */
export default function Careers() {
  return (
    <main className="canvas-warm">
      <CareersHero />
      <MissionBanner />
      <MeetTheTeam />
      <AnnualOffsite />
      <OpenRoles />
      <CareersCTA />
    </main>
  );
}
