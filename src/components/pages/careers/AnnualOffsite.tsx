import { useState } from 'react';
import Container from '@/components/ui/Container';

const OFFSITES = [
  {
    id: 'KvyYHv9MgQ4',
    title: 'Modash company offsite Sesimbra - With Big Blue Adventures',
    caption: 'In 2025, 60+ Modashians strutted into Sesimbra, Portugal.',
  },
  {
    id: 'GRnuPV22MTI',
    title: 'Modash company offsite Split (Croatia) - With Big Blue Adventures',
    caption: 'In 2024, 40+ Modashians descended on Split, Croatia.',
  },
  {
    id: 'FkWKyoiHo-0',
    title: 'Modash company offsite (Madeira 2023)',
    caption: 'In 2023, 20+ Modashians met up in Madeira, Portugal.',
  },
];

/** YouTube play-button overlay matching the native YT facade. */
function PlayButton() {
  return (
    <span className="pointer-events-none absolute inset-0 grid place-items-center transition group-hover:scale-105">
      <svg viewBox="0 0 68 48" width="68" height="48" aria-hidden="true">
        <path
          d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
          fill="#f00"
        />
        <path d="M45 24 27 14v20" fill="#fff" />
      </svg>
    </span>
  );
}

/** Our annual offsite — heading, intro copy, three YouTube videos (thumbnail facade → live embed on click). */
export default function AnnualOffsite() {
  const [active, setActive] = useState<Record<string, boolean>>({});

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
          {OFFSITES.map(({ id, title, caption }) => (
            <div key={id}>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink">
                {active[id] ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&controls=1&autoplay=1&mute=0&start=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActive((a) => ({ ...a, [id]: true }))}
                    aria-label={`Play: ${title}`}
                    className="group absolute inset-0 h-full w-full cursor-pointer"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                      alt={title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                      }}
                    />
                    <PlayButton />
                  </button>
                )}
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
