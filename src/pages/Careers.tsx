import CareersHero from '@/components/pages/careers/CareersHero';
import MissionBanner from '@/components/pages/careers/MissionBanner';
import MeetTheTeam from '@/components/pages/careers/MeetTheTeam';
import AnnualOffsite from '@/components/pages/careers/AnnualOffsite';
import OpenRoles from '@/components/pages/careers/OpenRoles';

/** Kolio careers page — web3 KOL platform. Sections render top-to-bottom. */
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
