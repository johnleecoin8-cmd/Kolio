import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

type Tab = {
  key: string;
  label: string;
  title: string;
  intro: string;
  bullets: string[];
  /** brand-neutral code/mock lines rendered in the panel */
  mock: string[];
  cta?: { label: string; to: string };
};

const TABS: Tab[] = [
  {
    key: 'api',
    label: 'API Design',
    title: 'Developer first API-design',
    intro:
      'The Kolio API is built for developers to get from an idea to production-ready as fast as possible.',
    bullets: [
      'Predictable, resource-oriented endpoints and URLs based on REST principles.',
      'Stateless communication with a uniform, consistent interface.',
      'Clean, structured JSON, making requests and responses easy to handle.',
    ],
    mock: [
      'GET /v1/kol/search',
      'GET /v1/kol/{id}/report',
      'GET /v1/kol/{id}/audience',
      'POST /v1/campaign/track',
      'GET /v1/attribution/onchain',
    ],
    cta: { label: 'View Docs', to: '/demo-confirmation' },
  },
  {
    key: 'docs',
    label: 'Documentation',
    title: 'Interactive and comprehensive docs',
    intro:
      'We offer comprehensive docs with quickstart guides, core concept explainers, and an interactive API reference.',
    bullets: [
      'Make a successful API call in under five minutes — Node.js, Python, Java, and more.',
      'Test endpoints and see live responses directly inside the docs, no code required.',
    ],
    mock: [
      '$ kolio quickstart',
      '> auth ok — sandbox key loaded',
      '> GET /v1/kol/search ... 200',
      '> 24 vetted KOLs returned',
      '> try it live in the reference →',
    ],
    cta: { label: 'View Docs', to: '/demo-confirmation' },
  },
  {
    key: 'support',
    label: 'Support',
    title: 'Expert support and guidance',
    intro: '',
    bullets: [
      'You get a dedicated account manager eager to understand your goals and guide you to success.',
      'We run Kolio on this same API — so we have lived the challenges and have best practices to share.',
    ],
    mock: [
      '// dedicated Slack channel',
      '// migration & onboarding support',
      '// 99.9% uptime SLA',
      '// best-practice review calls',
      '// built by the team that ships Kolio',
    ],
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
                  <ButtonLink to={tab.cta.to} variant="primary">
                    {tab.cta.label}
                  </ButtonLink>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-[520px] rounded-lg bg-[#0d1424] p-6 font-mono text-[0.8125rem] leading-[1.9] text-slate-200 shadow-btn">
                {tab.mock.map((line) => (
                  <div key={line} className="flex gap-4">
                    <span className="select-none text-slate-500">$</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
