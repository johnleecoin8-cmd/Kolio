import AcademyHero from '@/components/pages/academy/AcademyHero';
import AcademyLessons from '@/components/pages/academy/AcademyLessons';
import MoreResources from '@/components/pages/academy/MoreResources';
import HelpCta from '@/components/pages/academy/HelpCta';

/** Kolio Academy — web3 KOL marketing education. */
export default function Academy() {
  return (
    <main>
      <AcademyHero />
      <AcademyLessons />
      <MoreResources />
      <HelpCta />
    </main>
  );
}
