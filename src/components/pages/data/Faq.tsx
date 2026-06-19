import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'How do you get your data?',
    a: 'Kolio works similarly to a search engine. Software continuously indexes public information about crypto KOLs across X, YouTube, TikTok, and Telegram — plus public on-chain activity tied to their campaigns — and brings it into Kolio.',
  },
  {
    q: 'Is Kolio GDPR compliant?',
    a: 'Yes. Kolio is built to comply with the General Data Protection Regulation and processes only publicly available data to keep our customer data safe. You can find our Terms of Service and Privacy Policy linked in the footer.',
  },
  {
    q: 'Where is Kolio data stored?',
    a: 'Customer data is stored on hardened, audited cloud infrastructure with encryption at rest and in transit. Data from third-party tools and partners is stored in their respective facilities. For details, check out our Privacy Policy.',
  },
  {
    q: 'Do KOLs sign up to be found on Kolio?',
    a: 'Crypto KOLs do not opt in to our database, but they can opt out at any time. Kolio is an open network — we index publicly available information only. This makes credible KOLs easier for web3 brands to discover, vet, and pay fairly.',
  },
];

/** Frequently asked questions — accordion on full-bleed soft background. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background-soft py-16 md:py-24">
      <Container>
        <h2 className="mb-10 font-sans text-[1.5rem] font-bold leading-[1.15] text-foreground md:text-[1.875rem]">
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
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-gray-100 text-foreground">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
      </Container>
    </section>
  );
}
