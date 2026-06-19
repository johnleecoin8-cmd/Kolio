import { Play } from 'lucide-react';
import Container from '@/components/ui/Container';

const OFFSITES = [
  'In 2025, 60+ Modashians strutted into Sesimbra, Portugal.',
  'In 2024, 40+ Modashians descended on Split, Croatia.',
  'In 2023, 20+ Modashians met up in Madeira, Portugal.',
];

/** Our annual offsite — heading, intro copy, three video placeholders with captions. */
export default function AnnualOffsite() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
            Our annual offsite
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-foreground/70">
            As a remote-first company, we&rsquo;re totally comfortable and
            productive collaborating online. But once per year (at least!), we get
            together in person. It gives us a chance to get to know each other
            better, have fun, and create a bunch of great memories as a team.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1136px] space-y-12 md:mt-16 md:space-y-16">
          {OFFSITES.map((caption) => (
            <div key={caption}>
              <div className="group flex aspect-video w-full items-center justify-center rounded-xl bg-gray-200 transition">
                <div className="flex h-16 w-24 items-center justify-center rounded-2xl bg-white/40 transition group-hover:bg-white/60">
                  <Play
                    className="h-8 w-8 fill-white text-white"
                    strokeWidth={0}
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-body text-foreground/60">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
