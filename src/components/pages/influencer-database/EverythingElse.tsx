import Container from '@/components/ui/Container';
import {
  Search,
  ShieldCheck,
  Send,
  Users,
  LayoutGrid,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

const ITEMS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Search,
    title: 'Discover KOLs',
    body: 'Search & filter crypto KOLs across X, YouTube, TikTok & Telegram — or surface the ones already talking about your token. Solve KOL discovery in any niche, from DeFi to gaming.',
  },
  {
    icon: ShieldCheck,
    title: 'Vet with proof',
    body: 'Real reach, bot share, genuine engagement, audience quality, and past sponsorships — all upfront. No screenshots, no taking a KOL’s word for their numbers.',
  },
  {
    icon: Send,
    title: 'Reach out at scale',
    body: 'Find contacts and send outreach that feels 1:1 across DM and email. Onboard KOLs, share briefs, ship test allocations, and keep every thread in one place.',
  },
  {
    icon: Users,
    title: 'Manage relationships',
    body: 'Build unlimited lists to track your KOLs. Add notes for personalization, store deal terms and briefs, and keep your whole roster organized for the next campaign.',
  },
  {
    icon: LayoutGrid,
    title: 'Collect content',
    body: 'Automatically track live posts, threads, and videos and save them to a dashboard — even fast-moving X content — without asking KOLs to sign up.',
  },
  {
    icon: BarChart3,
    title: 'Measure on-chain results',
    body: 'Track reach, engagement, link clicks, wallet conversions, and on-chain volume attributed to each KOL and each campaign. Settle payouts against what actually happened.',
  },
];

/** 3x2 grid of supporting feature blurbs. */
export default function EverythingElse() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <h2 className="mx-auto max-w-[750px] text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
          Plus everything else you need to run a profitable crypto KOL program
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.title} className="flex flex-col gap-3">
              <it.icon className="h-6 w-6 text-brand" strokeWidth={2} />
              <div className="text-body font-semibold text-foreground">
                {it.title}
              </div>
              <p className="text-body-sm text-foreground/60">{it.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
