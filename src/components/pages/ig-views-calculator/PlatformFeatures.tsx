import {
  Search,
  BarChart3,
  Mail,
  Users,
  FolderOpen,
  LineChart,
} from 'lucide-react';
import Container from '@/components/ui/Container';

const FEATURES = [
  {
    icon: Search,
    title: 'Find influencers',
    description:
      'Search & filter 350M+ influencer profiles, or find influencers who already engaged with your brand. Solve influencer discovery at scale, in any niche.',
  },
  {
    icon: BarChart3,
    title: 'Analyze profiles',
    description:
      'Get data on audience demographics, locations, engagement rate, average views, past sponsors & more. Without reaching out to ask for screenshots.',
  },
  {
    icon: Mail,
    title: 'Send emails',
    description:
      "Your creators & influencers are annoyed because they're still waiting on payment for a campaign they finished a month ago.",
  },
  {
    icon: Users,
    title: 'Manage relationships',
    description:
      'Create unlimited lists to keep track of your influencers. Add notes for personalization (or for your team), organize documents (like contracts/briefs), and more.',
  },
  {
    icon: FolderOpen,
    title: 'Collect content',
    description:
      'Automatically track live content, and save it to a dashboard. Even Stories. Without asking influencers to sign up.',
  },
  {
    icon: LineChart,
    title: 'Measure results',
    description:
      'Track metrics like total content, views, engagements, link clicks, promo code redemptions, and more. Per campaign, and per influencer.',
  },
];

/** Dark heading + intro + 6-up feature grid. */
export default function PlatformFeatures() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-foreground">
            An influencer marketing platform built to scale with you
          </h2>
          <p className="max-w-lg text-body text-foreground">
            When spreadsheets aren't cutting it anymore, Modash gives Shopify
            brands everything they need to grow their influencer programs.
            Here's what Modash helps with:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex flex-col items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-bg text-pink-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-body font-semibold leading-normal text-foreground">
                  {f.title}
                </h3>
                <p className="text-body-sm leading-relaxed text-foreground/60">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
