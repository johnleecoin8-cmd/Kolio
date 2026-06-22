import Container from '@/components/ui/Container';
import SectionHeader from './SectionHeader';

const CDN = 'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719';
const ELENI = `${CDN}/629db9e4a21198f0d5c5df85_1547060438037.avif`;

const ISSUES = [
  {
    issue: 'Issue #69',
    href: '/newsletter/onchain-attribution',
    title: 'Stop guessing: tie every KOL post to an on-chain wallet',
    author: 'Eleni Zoe',
    date: 'February 18, 2026',
    read: '4 min',
  },
  {
    issue: 'Issue #68',
    href: '/newsletter/kol-rates-2026',
    title: "What crypto KOLs actually charge in 2026 — and what's worth paying for.",
    author: 'Eleni Zoe',
    date: 'February 4, 2026',
    read: '5 min',
  },
  {
    issue: 'Issue #67',
    href: '/newsletter/vet-a-kol-in-ten-minutes',
    title: 'How to vet a crypto KOL in ten minutes without trusting follower counts',
    author: 'Eleni Zoe',
    date: 'January 21, 2026',
    read: '5 min',
  },
];

/** "Return on Influence - Bite-Sized Insights" — newsletter issue rows. */
export default function BiteSizedInsights() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container className="max-w-[896px]">
        <SectionHeader
          eyebrow="Newsletter"
          title="Return on Influence - Bite-Sized Insights"
          href="/newsletter"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {ISSUES.map((n) => (
            <a
              key={n.issue}
              href={n.href}
              className="card-kit flex min-h-[230px] flex-col p-6"
            >
              <span className="chip chip-ink w-fit">
                {n.issue}
              </span>
              <span className="mt-4 text-body-md font-bold leading-snug text-foreground">
                {n.title}
              </span>
              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-6">
                <div className="flex items-center gap-2">
                  <img
                    src={ELENI}
                    alt=""
                    loading="lazy"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <span className="text-body-sm font-semibold text-foreground">
                    {n.author}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-body-sm text-foreground/50">
                  <span>{n.date}</span>
                  <span>•</span>
                  <span>{n.read}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
