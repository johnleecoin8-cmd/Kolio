import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const FAQS = [
  {
    q: 'What tools does Modash Discovery replace?',
    a: 'Modash Discovery replaces manual scrolling through social platforms, scattered spreadsheets, and juggling multiple influencer research tools. Instead of spending hours manually searching Instagram, TikTok, or YouTube and copying data into spreadsheets, you get one unified search engine with 380M+ creator profiles, advanced filters, and AI-powered search—all connected to your entire workflow for managing, tracking, and paying creators.',
  },
  {
    q: 'Will I be able to find creators that fit my brand?',
    a: "Yes. Modash includes every public profile on Instagram, TikTok, and YouTube with over 1K followers. That's 380M+ creators. You can filter by location, niche, audience demographics, engagement metrics, lookalikes, and content style to find exactly who you need. Our Influential Fans feature helps you discover creators who already engage with your brand on social media.",
  },
  {
    q: 'What types of creators can I discover (micro, niche, local, global)?',
    a: 'Modash has 380M+ creator profiles across Instagram, TikTok, and YouTube. We include every public profile with over 1K followers, giving you access to the world’s largest database of influencers, from nano creators to mega influencers. Using our advanced filters, you can discover creators in any niche, any location (down to the city level on Instagram), and any size.',
  },
  {
    q: 'Can I reliably find creators whose audience matches my brand?',
    a: "Yes. Filter by audience age, gender, location (down to city level on Instagram), language, and interests. You're not just choosing creators who look right, but creators whose followers match who you're trying to reach. You can combine and adjust filters as you go, which means you can start broad and refine without hitting dead ends.",
  },
  {
    q: 'How accurate is your influencer data?',
    a: "Our data is as accurate as it gets. We analyze hundreds of billions of publicly available content pieces and update several times a month. Leading B2C brands trust our data, and we even power other platforms through our API. We update data several times a month, so you can trust you're getting the most recent info, too.",
  },
  {
    q: 'How does Modash help vet creators and detect fake followers?',
    a: 'To help you feel confident in your vetting process, Modash shows you engagement rates, audience quality scores, follower demographics, past brand partnerships, content history, and audience interests, so you only reach out to creators who align with your brand. The fake follower rate includes both suspicious mass followers and obvious bots.',
  },
  {
    q: 'Can I search by showing you the type of content I want?',
    a: 'Yes, use our AI-powered visual search to describe content or upload examples. Find creators posting "woman building a cabin in the woods" or "food reviews in cars." Modash surfaces creators with that exact vibe.',
  },
  {
    q: 'Can I see a creator’s past brand partnerships?',
    a: "Yes. View a timeline of all past brand partnerships, sorted by date. See who they've collaborated with, what content formats they used, and whether they disclosed sponsorships properly.",
  },
  {
    q: 'Can I find creators similar to ones I already work with?',
    a: "Yes. Use our lookalike tool to find creators with similar content or audiences to your top performers. It's the fastest way to scale what's already working.",
  },
  {
    q: "Can I see creators’ public email addresses?",
    a: 'Yes. When creators choose to make their email address public on their profile, Modash surfaces it for you. We only show emails that creators have intentionally listed in their bios on platforms like Instagram, TikTok, or YouTube.',
  },
];

/** Accordion FAQ on a soft background. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background-soft py-16 md:py-24">
      <Container>
        <SectionHeading as="h3">Frequently asked questions</SectionHeading>
        <div className="mt-8">
          {FAQS.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-body md:text-body-md font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-foreground/60">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-12 text-body-sm md:text-body text-foreground/75">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
