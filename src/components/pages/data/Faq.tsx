import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';

const FAQS = [
  {
    q: 'How do you get your data?',
    a: 'Modash works similarly to Google Search. Data is collected by a software program that collects public information on creators and brings it into Modash.',
  },
  {
    q: 'Is Modash GDPR compliant?',
    a: 'Yes. Modash is headquartered in Tallinn, Estonia, and complies with the General Data Protection Regulation to keep our customer data safe. Find our Terms of Service here & our Privacy Policy here.',
  },
  {
    q: 'Where is Modash data stored?',
    a: 'Data is stored within Europe (Frankfurt, Germany on AWS servers). Data from third-party tools & partners are stored in other hosting facilities. For more information, check out our Privacy Policy.',
  },
  {
    q: 'Have creators signed up to be found on your platform?',
    a: 'Influencers & creators do not opt-in to our database, but they can opt out at any time. Modash is an open network database. We list publicly available info only. This allows creators to be found more easily by brands & get paid to do what they love.',
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
