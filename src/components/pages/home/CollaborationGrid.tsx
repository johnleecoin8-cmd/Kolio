import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const CARDS = [
  {
    title: 'Token launches',
    img: `${CDN}/69e885c76c3d260cf994cce8_img_gifting_3col.avif`,
    body: 'Line up the right KOLs ahead of TGE or a listing. Brief them, schedule posts around your launch window, and keep every deliverable on track from one place.',
    href: '/demo-confirmation',
  },
  {
    title: 'Referral & affiliate',
    img: `${CDN}/69e885be31d1138c351bce27_img_affiliates_3col.avif`,
    body: 'Run KOL referral programs with on-chain attribution, automated payouts, and bulk actions. Spend less time on admin and more time on the partners actually driving sign-ups.',
    href: '/demo-confirmation',
  },
  {
    title: 'Paid partnerships',
    img: `${CDN}/69e885dbd206cc3fe00abd32_img_paid%20partnerships_3col.avif`,
    body: 'Centralize every deal, deliverable, and escrow in one place. Test more KOLs, double down on winners faster, and scale paid partnerships without adding headcount.',
    href: '/demo-confirmation',
  },
];

/** "Manage every KOL collaboration from one place" — three use-case cards. */
export default function CollaborationGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-10 max-w-[640px] font-sans text-[2rem] font-extrabold leading-[1.1] text-foreground md:text-[2.5rem]">
          Manage every KOL collaboration from one place
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="flex flex-col">
              <a href={c.href} className="block overflow-hidden rounded-lg">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="aspect-[368/280] w-full object-cover transition hover:scale-[1.02]"
                />
              </a>
              <div className="mt-6 flex flex-1 flex-col items-start gap-6">
                <div>
                  <a href={c.href} className="font-sans text-body-lg font-bold text-foreground">
                    {c.title}
                  </a>
                  <p className="mt-3 text-body-md text-foreground/75">{c.body}</p>
                </div>
                <ButtonA href={c.href} variant="secondary" className="mt-auto">
                  Learn more
                </ButtonA>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
