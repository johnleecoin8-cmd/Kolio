import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Point = { title: string; body: string };

type Block = {
  img: string;
  alt: string;
  heading: string;
  points: Point[];
  reverse?: boolean;
};

const BLOCKS: Block[] = [
  {
    img: `${CDN}/69afd245124e6c7889497872_img_payments_01.avif`,
    alt: 'Pay in any currency',
    heading: 'Pay any creator, in any country, in any currency',
    points: [
      {
        title: '180+ countries and 36 currencies',
        body: "Pay creators in their local currency. Choose automatic monthly payouts or review-and-approve. You're in control.",
      },
      {
        title: 'Bank account payments in 1-3 days',
        body: 'Fast, reliable transfers straight to creator bank accounts. No extra fees, no slow wires.',
      },
      {
        title: 'Zero fees to creators',
        body: 'Creators get the full approved amount. No deductions, no surprises.',
      },
    ],
  },
  {
    img: `${CDN}/69a572026a3bd64adee010f4_img_payments_02.avif`,
    alt: 'Never chase an invoice again',
    heading: 'Never chase an invoice again',
    reverse: true,
    points: [
      {
        title: 'One invoice for your finance team',
        body: 'Finance gets a single consolidated invoice for all creator payments.',
      },
      {
        title: 'Automatic invoice collection',
        body: 'Send a payment link once. Creators add their details and generate automated compliant invoices.',
      },
      {
        title: 'Creator dashboard',
        body: 'Creators check their payment status themselves. No more "when will I be paid?" emails.',
      },
    ],
  },
  {
    img: `${CDN}/69a5720d92d335910003ea31_img_payments_03.avif`,
    alt: 'Compliance and tracking',
    heading: 'Compliance and tracking — fully handled',
    points: [
      {
        title: 'Modash as vendor of record',
        body: 'We handle international tax obligations and regulatory compliance liability across 180+ countries.',
      },
      {
        title: 'Complete audit trail',
        body: 'Full payment history with documentation ready for audits.',
      },
      {
        title: 'Balance dashboard',
        body: 'Track payment balance and monitor creator progress at a glance.',
      },
    ],
  },
];

function FeatureBlock({ img, alt, heading, points, reverse }: Block) {
  return (
    <div className="overflow-hidden rounded-xl bg-background-soft p-6 md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className={reverse ? 'md:order-2' : ''}>
          <img src={img} alt={alt} loading="lazy" className="w-full" />
        </div>
        <div className={reverse ? 'md:order-1' : ''}>
          <h3 className="font-display text-h4 leading-tight text-ink">{heading}</h3>
          <div className="mt-6 space-y-5">
            {points.map((p) => (
              <div key={p.title}>
                <p className="text-body font-bold text-ink">{p.title}</p>
                <p className="mt-1 text-body-sm text-foreground/70">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonA href="https://www.modash.io/book-demo" variant="primary">
              Request a demo
            </ButtonA>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Three alternating feature blocks under "Pay creators globally". */
export default function FeatureBlocks() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Pay creators globally, without the headache
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Send payment links, automatically collect invoices, and let Modash
            handle compliance so you can keep moving to the next partnership.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {BLOCKS.map((b) => (
            <FeatureBlock key={b.heading} {...b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
