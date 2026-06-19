import CareersHero from '@/components/pages/careers/CareersHero';
import MissionBanner from '@/components/pages/careers/MissionBanner';
import MeetTheTeam from '@/components/pages/careers/MeetTheTeam';
import AnnualOffsite from '@/components/pages/careers/AnnualOffsite';
import OpenRoles from '@/components/pages/careers/OpenRoles';

/** modash.io/careers — 1:1 clone. Sections render top-to-bottom. */
export default function Careers() {
  return (
    <main>
      <CareersHero />
      <MissionBanner />
      <MeetTheTeam />
      <AnnualOffsite />
      <OpenRoles />
    </main>
  );
}
