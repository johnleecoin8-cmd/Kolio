import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

type Item = { title: string; body: string };
type Block = { img: string; heading: string; items: Item[] };

const BLOCKS: Block[] = [
  {
    img: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/699439a908a01a0f537a4ec3_img_discover_block_01.avif',
    heading: 'Match with the right creators, instantly',
    items: [
      {
        title: 'AI-powered search across 380M+ profiles',
        body: "Describe what you're looking for with your words. Modash analyzes bios, captions, and visuals to surface the right profiles in seconds.",
      },
      {
        title: 'Visual search',
        body: 'Upload an image and find creators whose visual aesthetic matches it.',
      },
      {
        title: 'Precision filters',
        body: 'Filter by audience demographics, location, engagement rate, and content topics to find exactly who you need.',
      },
    ],
  },
  {
    img: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/69c39f318a002ac60c799167_img_discover_block_02.avif',
    heading: 'Make sure creators are a good fit before you reach out',
    items: [
      {
        title: 'Audience demographics, not just creator bios',
        body: 'See the age, gender, location, and interests of their followers, before you send a single email.',
      },
      {
        title: 'Authenticity checks built in',
        body: 'Spot fake followers so you don’t budget on bot accounts. Move to outreach with confidence.',
      },
      {
        title: 'Brand collaborations timeline',
        body: "Review which brands they've worked with, what the content looked like, and how it performed.",
      },
    ],
  },
  {
    img: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/699439bf59b0d14ed09daa8e_img_discover_block_03.avif',
    heading: 'Turn one win into many, repeatedly',
    items: [
      {
        title: 'Lookalike search from top performers',
        body: 'Found one creator who crushed it? Find 20 more with similar audiences or content styles.',
      },
      {
        title: 'Influential fans',
        body: 'Skip the cold outreach and surface creators who already follow and engage with your brand.',
      },
      {
        title: 'Influential customers',
        body: 'Discover creators who are already your customers. Pure gold for authenticity.',
      },
    ],
  },
];

/** Intro heading + three large gray feature blocks (image + bullet list). */
export default function FeatureBlocks() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[750px] text-center">
          <SectionHeading>
            Find creators worth your time, without the guesswork
          </SectionHeading>
          <p className="mt-4 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/75">
            Pull from 380M+ profiles and build shortlists you'd actually bet on, whenever you need
            them.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {BLOCKS.map((b) => (
            <div
              key={b.heading}
              className="grid items-center gap-6 rounded-xl bg-background-soft p-5 md:grid-cols-2 md:gap-10 md:p-8"
            >
              <img
                src={b.img}
                alt=""
                className="w-full rounded-lg"
                loading="lazy"
              />
              <div>
                <h3 className="text-body-lg font-semibold text-foreground">{b.heading}</h3>
                <ul className="mt-5 space-y-4">
                  {b.items.map((it) => (
                    <li key={it.title}>
                      <p className="text-body font-semibold text-foreground">{it.title}</p>
                      <p className="mt-1 text-body-sm text-foreground/75">{it.body}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://marketer.modash.io/register/marketer"
                  className="mt-6 inline-flex items-center justify-center h-10 px-[1.125rem] rounded-sm bg-ink text-white text-body font-semibold transition hover:opacity-90"
                >
                  Try for free
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
