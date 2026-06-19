import { Play } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from './SectionHeader';

const VIDEOS = [
  {
    href: '/watch/tge-kol-plan',
    kicker: 'Playbook',
    title: 'How To Plan Your KOL Push Around a Token Launch (Stage By Stage)',
  },
  {
    href: '/watch/kill-kol-deals',
    kicker: 'Relationships',
    title: '5 Ways Crypto Brands Kill KOL Deals (And How to Fix Them)',
  },
  {
    href: '/watch/find-kols-with-kolio',
    kicker: 'Discovery',
    title: 'How To Find and Vet Crypto KOLs With Kolio',
  },
];

/** "Scale your KOL program" — 3 brand-neutral video cards (no external thumbnails). */
export default function ScaleProgram() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container className="max-w-[896px]">
        <SectionHeader title="Scale your KOL program" href="/watch" />

        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <div key={v.href} className="flex flex-col">
              <a
                href={v.href}
                className="group relative block aspect-video overflow-hidden rounded-xl bg-gradient-brand"
              >
                <span className="absolute left-4 top-4 rounded-pill bg-white/20 px-3 py-1 text-eyebrow font-semibold uppercase text-white backdrop-blur">
                  {v.kicker}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-lg transition-transform group-hover:scale-110">
                    <Play size={22} className="ml-0.5 fill-current" />
                  </span>
                </span>
              </a>
              <a
                href={v.href}
                className="mt-4 text-body font-bold leading-snug text-foreground"
              >
                {v.title}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
