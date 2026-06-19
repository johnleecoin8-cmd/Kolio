import { PLATFORMS } from './platforms';

const slug = (n: number) => `platform-${n}`;

/** Sticky left-rail table of contents. Lists all 19 platforms. */
export default function TableOfContents() {
  const labels: Record<number, string> = {
    5: '5. Meltwater (formerly Klear)',
    7: '7. Later Influence (formerly Mavrck)',
    13: '13. Aspire (formerly AspireIQ)',
    17: '17. Sprout Social Influencer Marketing (formerly Tagger)',
    18: '18. Bazaarvoice Vibe Creator Marketing (formerly Affable)',
  };
  return (
    <nav aria-label="Table of contents" className="text-body-sm">
      <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
        Table of Contents
      </p>
      <ul className="space-y-2.5">
        {PLATFORMS.map((p) => (
          <li key={p.num}>
            <a
              href={`#${slug(p.num)}`}
              className="block text-foreground/65 transition hover:text-foreground"
            >
              {labels[p.num] ?? `${p.num}. ${p.name}`}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-body-sm text-foreground/50">
        See why 1,700+ ecommerce brands rate Modash as the #1 influencer marketing
        platform
      </p>
    </nav>
  );
}
