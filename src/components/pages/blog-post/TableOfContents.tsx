import { PLATFORMS } from './platforms';

const slug = (n: number) => `platform-${n}`;

/** Sticky left-rail table of contents. Lists all 19 platforms. */
export default function TableOfContents() {
  const labels: Record<number, string> = {
    5: '5. Meltwater',
    7: '7. Later Influence',
    13: '13. Aspire',
    17: '17. Sprout Social Influencer Marketing',
    18: '18. Bazaarvoice Vibe Creator Marketing',
  };
  return (
    <nav aria-label="Table of contents" className="text-body-sm">
      <p className="border-b border-gray-200 pb-3 text-body font-bold text-foreground">
        Table of Contents
      </p>
      <ul>
        {PLATFORMS.map((p) => (
          <li key={p.num} className="border-b border-gray-200">
            <a
              href={`#${slug(p.num)}`}
              className="block py-3 text-foreground/65 transition hover:text-foreground"
            >
              {labels[p.num] ?? `${p.num}. ${p.name}`}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
