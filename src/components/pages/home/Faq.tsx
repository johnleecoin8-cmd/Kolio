import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'What is Modash and how does it work?',
    a: 'Modash is an influencer marketing platform that lets brands on Shopify manage and grow their influencer programs from one place. Find creators, manage relationships, track performance, and pay them in one connected workflow. Run paid partnerships, affiliate programs, and gifting campaigns without juggling multiple tools or spreadsheets.',
  },
  {
    q: 'Is Modash a platform, an agency, or a marketplace?',
    a: "Modash is a platform only. It's a software tool you use yourself to run your influencer marketing program. We're not an agency (we don't run campaigns for you), and we're not a marketplace (creators don't browse and apply to work with you). Think of Modash as your operating system for influencer marketing.",
  },
  {
    q: 'Can I use Modash if I’m not on Shopify?',
    a: 'Yes, you can use all our core features: discovery, management, tracking, and payments. But we focus primarily on Shopify-connected stores, so you’ll get the most value if you’re on Shopify. Our Shopify integration unlocks powerful features, like product gifting, affiliate programs, and automatic sales tracking.',
  },
  {
    q: "Will I find the creators I'm looking for?",
    a: "Yes. Modash includes every public profile on Instagram, TikTok, and YouTube with over 1K followers. That's 350M+ creators! You can use our AI-powered search or filter by location, niche, audience demographics, and engagement metrics to find perfect matches for your brand.",
  },
  {
    q: 'How does Modash pricing work?',
    a: 'We offer transparent, straightforward pricing starting at $199/month. Plans scale based on your needs (searches, emails, tracked creators, seats). Check our pricing page for full details.',
  },
  {
    q: 'Is there a free trial?',
    a: "Yes. We offer a 14-day free trial with no credit card required. You get full access to all features so you can test if it's the right fit for your influencer program. The trial does have some usage limits, so we recommend watching our interactive product tours first to plan your trial effectively.",
  },
];

/** Frequently asked questions — accordion on sand bg. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-sand p-8 md:p-14">
          <h2 className="mb-8 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-black/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-5">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="text-body-md font-semibold text-foreground">
                      {f.q}
                    </span>
                    <span className="shrink-0 text-foreground">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 max-w-[760px] text-body text-foreground/75">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
