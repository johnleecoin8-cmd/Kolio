import LegalHero from '@/components/pages/legal/LegalHero';
import LegalBody from '@/components/pages/legal/LegalBody';

/** Kolio /legal/privacy-policy. Sections render top-to-bottom. */
export default function Legal() {
  return (
    <main>
      <LegalHero />
      <LegalBody />
    </main>
  );
}
