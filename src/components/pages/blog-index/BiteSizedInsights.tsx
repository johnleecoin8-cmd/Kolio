import Container from '@/components/ui/Container';
import SectionHeader from './SectionHeader';

const CDN = 'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719';
const ELENI = `${CDN}/629db9e4a21198f0d5c5df85_1547060438037.avif`;

const ISSUES = [
  {
    issue: 'Issue #69',
    href: 'https://newsletter.modash.io/p/scaling-instinct',
    title: 'Why your gut is smarter than you think (and how to actually use it)',
    author: 'Eleni Zoe',
    date: 'February 18, 2026',
    read: '4 min',
  },
  {
    issue: 'Issue #68',
    href: 'https://newsletter.modash.io/p/social-trends-2026',
    title: "Social is tired. Here's what that means for your creator campaigns.",
    author: 'Eleni Zoe',
    date: 'February 4, 2026',
    read: '5 min',
  },
  {
    issue: 'Issue #67',
    href: 'https://newsletter.modash.io/p/how-to-judge-influencer-content-without-turning-it-into-a-taste-debate',
    title: 'How to judge influencer content without turning it into a taste debate',
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
          title="Return on Influence - Bite-Sized Insights"
          href="/newsletter"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {ISSUES.map((n) => (
            <a
              key={n.issue}
              href={n.href}
              className="flex min-h-[230px] flex-col rounded-xl bg-background-soft p-6 transition-shadow hover:shadow-nav"
            >
              <span className="inline-flex w-fit rounded-pill bg-purple px-3 py-1 text-eyebrow font-semibold text-white">
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
