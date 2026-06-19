import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Tab = {
  key: string;
  label: string;
  title: string;
  intro: string;
  bullets: string[];
  image: string;
  cta?: { label: string; href: string };
};

const TABS: Tab[] = [
  {
    key: 'api',
    label: 'API Design',
    title: 'Developer first API-design',
    intro:
      'Modash API is built for developers to get from an idea to production-ready as quickly as possible.',
    bullets: [
      'Predictable and resource-oriented endpoints and URLs based on REST principles.',
      'Uses stateless communication and a uniform, consistent interface.',
      'Clean, structured JSON, making requests and responses easy to handle.',
    ],
    image: `${CDN}/6917195f572ff24b5593e6c5_image%20350.avif`,
    cta: { label: 'View Docs', href: 'https://docs.modash.io/' },
  },
  {
    key: 'docs',
    label: 'Documentation',
    title: 'Interactive and comprehensive docs',
    intro:
      'We offer comprehensive docs with quickstart guides, core concept explainers, and an interactive API reference.',
    bullets: [
      'Make successful API call in under five minutes in multiple languages, including Node.js, Python, Java and more.',
      'Test endpoints and see live responses directly within the documentation without writing any code.',
    ],
    image: `${CDN}/69131bcd74ec1c5a5f25293c_img_API_02.avif`,
    cta: { label: 'View Docs', href: 'https://docs.modash.io/' },
  },
  {
    key: 'support',
    label: 'Support',
    title: 'Expert support and guidance',
    intro: '',
    bullets: [
      'You’ll get a dedicated account manager eager to understand your goals and guide you every step of the way to success.',
      'We use the Modash API ourselves to power modash.io! That means we’ve lived the challenges, built around them, and have best practices to share.',
    ],
    image: `${CDN}/6981d76134cc4acfc1befbd7_img_API_03.avif`,
  },
];

/** "Engineered for world-class developer experience" — segmented tabs + pink feature panel. */
export default function DeveloperExperience() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[600px] text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground">
          Engineered for world-class developer experience
        </h2>

        {/* segmented tab control */}
        <div className="mx-auto mt-10 flex w-fit rounded-pill bg-ink p-1">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              className={`rounded-pill px-6 py-2 text-body font-semibold transition ${
                i === active
                  ? 'bg-white text-ink ring-2 ring-ink'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* feature panel */}
        <div className="mt-10 overflow-hidden rounded-xl bg-pink-light">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-12">
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-[2.25rem] uppercase leading-none text-ink">
                {tab.title}
              </h3>
              {tab.intro && (
                <p className="mt-4 text-body-md text-ink/80">{tab.intro}</p>
              )}
              <ul className="mt-6 space-y-4">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-ink"
                      strokeWidth={2}
                    />
                    <span className="text-body text-ink/85">{b}</span>
                  </li>
                ))}
              </ul>
              {tab.cta && (
                <div className="mt-8">
                  <ButtonA href={tab.cta.href} variant="primary">
                    {tab.cta.label}
                  </ButtonA>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <img
                src={tab.image}
                alt={tab.title}
                loading="lazy"
                className="w-full max-w-[520px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
