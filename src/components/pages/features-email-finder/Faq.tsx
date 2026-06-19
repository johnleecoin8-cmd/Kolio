import { useState } from 'react';
import Container from '@/components/ui/Container';
import { Plus, Minus } from 'lucide-react';

type Item = { q: string; a: React.ReactNode };

const ITEMS: Item[] = [
  {
    q: 'How do you get your data? How accurate is it?',
    a: (
      <>
        Just like Google, Modash analyzes hundreds of billions of publicly
        available content and builds insights based on it. Our data is as
        accurate as it gets. After auditing our data, some of the
        fastest-growing B2C companies in the world chose Modash over
        alternatives. Our data even powers other platforms and internal tools
        via our API. We update it several times a month, so you can trust you're
        getting the most recent info, too.
      </>
    ),
  },
  {
    q: 'Do you show analytics & performance metrics for influencers & their followers?',
    a: (
      <>
        Yes. While analytics will vary across platforms we aim to give you a deep
        understanding of an influencer profile, including their audience. Here
        are just some of the metrics available in Modash: Audience demographics
        (Age, Gender, Location by city, interests), Influencer performance
        (Follower count, Average likes, Engagement rate, Past Paid Post
        Performance), Vetting (Popular posts, fake followers). To see them all,
        try Modash for free.
      </>
    ),
  },
  {
    q: 'Do I need to be using Shopify to use Modash?',
    a: (
      <>
        No, it's just that ecommerce brands using Shopify get the most value out
        of Modash. Through our Shopify integration, those users get access to
        extra features. Like sending free products to influencers, running an
        affiliate program (including payouts), and managing Shopify promo codes.
        The rest of our features work outside of Shopify. Finding influencers,
        analyzing profiles, managing influencer lists, collecting influencer
        content, and more. There are hundreds of other types of business using
        Modash including Airbnb, NordVPN, and Ground News.
      </>
    ),
  },
  {
    q: 'Can I track my campaigns with Modash?',
    a: (
      <>
        Modash will collect and track ALL of your branded content (even stories)
        and store it. No creator signup is required. You'll also get insights
        like who posted what type of content and who complied with ad
        disclosures, as well as the number of discount code redemptions, link
        clicks, and more. See how it works.
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-sand px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto max-w-[760px]">
            <div className="mb-3 text-body-sm font-semibold text-foreground/50">
              FAQ
            </div>
            <h3 className="font-display text-h3 leading-tight text-foreground">
              Stuff people ask before they hit "Try&nbsp;for&nbsp;Free"
            </h3>

            <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
              {ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-body-md font-semibold text-foreground">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <Minus className="h-5 w-5 shrink-0 text-foreground" />
                      ) : (
                        <Plus className="h-5 w-5 shrink-0 text-foreground" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="pb-6 text-body text-foreground/70">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
