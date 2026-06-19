import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Sub = { title: string; body: string };
type Block = {
  img: string;
  heading: string;
  subs: Sub[];
};

const BLOCKS: Block[] = [
  {
    img: `${CDN}/699c169e4a6ffdde6e65c136_img_manage_01.avif`,
    heading: 'View all creator details in one central place',
    subs: [
      {
        title: 'Full conversation history',
        body: 'Every email, note, and campaign data in one timeline. Pick up right where you left off, even months later.',
      },
      {
        title: 'Campaign performance linked to creators',
        body: 'See past collaborations, content delivered, and results, all attached to the creator profile.',
      },
      {
        title: 'Custom fields for your workflow',
        body: 'Store rates, addresses, birthdays, and anything else that matters to your team.',
      },
    ],
  },
  {
    img: `${CDN}/6996e67a00408b5c986ea365_img_manage_02.avif`,
    heading: 'Keep your workflow moving forward',
    subs: [
      {
        title: 'Work faster with bulk actions',
        body: 'Assign campaigns, attach files, or update details for dozens of creators in one click.',
      },
      {
        title: 'Organize with custom labels and statuses',
        body: 'Group creators by lists, campaigns, niche, performance tier, or stage.',
      },
      {
        title: 'Set up creators for success',
        body: 'With Shopify connected, create and share promo codes, affiliate links, and product orders in a few clicks.',
      },
    ],
  },
  {
    img: `${CDN}/699c16a8dfd2226b14868054_img_manage_03.avif`,
    heading: 'Scale relationships as a team',
    subs: [
      {
        title: 'Shared database visibility',
        body: 'Everyone on your team sees the same creator information and where they are in your workflow.',
      },
      {
        title: 'Clear assignment and ownership',
        body: 'Assign creators to specific team members so responsibilities are always clear and no relationships fall through the cracks.',
      },
      {
        title: 'Team notes and context',
        body: 'Leave notes that stay visible forever: "Prefers Instagram over TikTok" or "Ships next Tuesday" ensures context is never lost.',
      },
    ],
  },
];

function FeatureRow({ block }: { block: Block }) {
  return (
    <div className="grid items-center gap-8 rounded-xl bg-background-soft p-6 md:grid-cols-2 md:gap-12 md:p-10">
      <div className="order-2 md:order-1">
        <img
          src={block.img}
          alt={block.heading}
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="font-display text-h4 leading-tight text-ink">
          {block.heading}
        </h3>
        <div className="mt-6 space-y-5">
          {block.subs.map((s) => (
            <div key={s.title}>
              <p className="text-body font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-body-sm text-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <ButtonA
            href="https://marketer.modash.io/register/marketer"
            variant="primary"
          >
            Try for free
          </ButtonA>
        </div>
      </div>
    </div>
  );
}

/** "Get things organized" — three image + feature-list blocks. */
export default function FeatureBlocks() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-display text-h4 leading-tight text-ink md:text-h3">
            Get things organized and under control from one place
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-body-md text-foreground/70">
            Everything you need to manage dozens of creators from outreach to
            payment, in a few clicks.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {BLOCKS.map((b) => (
            <FeatureRow key={b.heading} block={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
