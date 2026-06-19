import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const CARDS = [
  {
    img: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/69943a036c9c92f2263649a9_img_discover_01.avif',
    title: 'Zero onboarding required',
    body: 'Find lookalikes, discover influential fans, import customer emails, or explore past brand collabs.',
  },
  {
    img: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/69943a0bb2dfcefb9140a046_img_discover_02.avif',
    title: 'No creator opt-in',
    body: "When everyone's accessible, you get real choice and better matches.",
  },
  {
    img: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/69944064992f2c613a6d4e2a_img_discover_03.avif',
    title: 'Immediate outreach',
    body: 'No waiting for screenshots, no back-and-forth. Just straight to outreach.',
  },
];

/** "Everything you need" — centered heading + 3 image cards. */
export default function EverythingGrid() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeading className="mx-auto max-w-[640px] text-center">
          Everything you need to build shortlists with confidence
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title}>
              <div className="overflow-hidden rounded-xl bg-background-soft">
                <img src={c.img} alt="" className="w-full" loading="lazy" />
              </div>
              <h3 className="mt-4 text-body-md font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-body-sm text-foreground/75">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
