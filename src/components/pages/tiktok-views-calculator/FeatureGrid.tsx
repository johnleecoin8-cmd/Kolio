import { Search, BarChart3, Mail, Users, TrendingUp, Megaphone } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const FEATURES = [
  {
    icon: Search,
    title: 'Find influencers',
    body: 'Search & filter 350M+ influencer profiles, or find influencers who already engaged with your brand. Solve influencer discovery at scale, in any niche.',
  },
  {
    icon: BarChart3,
    title: 'Analyze profiles',
    body: 'Get data on audience demographics, locations, engagement rate, average views, past sponsors & more. Without reaching out to ask for screenshots.',
  },
  {
    icon: Mail,
    title: 'Send emails',
    body: "Your creators & influencers are annoyed because they're still waiting on payment for a campaign they finished a month ago.",
  },
  {
    icon: Users,
    title: 'Manage relationships',
    body: 'Create unlimited lists to keep track of your influencers. Add notes for personalization (or for your team), organize documents (like contracts/briefs), and more.',
  },
  {
    icon: TrendingUp,
    title: 'Collect content',
    body: 'Automatically track live content, and save it to a dashboard. Even Stories. Without asking influencers to sign up.',
  },
  {
    icon: Megaphone,
    title: 'Measure results',
    body: 'Track metrics like total content, views, engagements, link clicks, promo code redemptions, and more. Per campaign, and per influencer.',
  },
];

/** "An influencer marketing platform built to scale with you" — 3-col feature grid. */
export default function FeatureGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[20ch] text-center font-display text-[2.5rem] uppercase leading-[1.02] text-foreground md:text-[4rem]">
          An influencer marketing platform built to scale with you
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-body text-foreground/75 md:text-body-md">
          When spreadsheets aren't cutting it anymore, Modash gives Shopify
          brands everything they need to grow their influencer programs. Here's
          what Modash helps with:
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title}>
                <Icon size={26} className="text-foreground" />
                <h3 className="mt-4 text-body font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-body-sm text-foreground/70">{f.body}</p>
                <a
                  href="https://www.modash.io/"
                  className="mt-4 inline-block text-body-sm font-semibold text-foreground underline underline-offset-4"
                >
                  Learn more
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <ButtonA href="https://www.modash.io/" variant="primary" size="md">
            Try for free
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
