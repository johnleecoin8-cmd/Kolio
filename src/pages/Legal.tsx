import LegalHero from '@/components/pages/legal/LegalHero';
import LegalBody from '@/components/pages/legal/LegalBody';

/** modash.io /legal/privacy-policy — 1:1 clone. Sections render top-to-bottom. */
export default function Legal() {
  return (
    <main>
      <LegalHero />
      <LegalBody />
    </main>
  );
}
