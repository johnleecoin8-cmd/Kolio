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
      <p className="eyebrow mb-3">On this page</p>
      <ul className="border-t border-gray-200">
        {PLATFORMS.map((p) => {
          const full = labels[p.num] ?? `${p.num}. ${p.name}`;
          const name = full.replace(/^\d+\.\s*/, '');
          return (
            <li key={p.num} className="border-b border-gray-200">
              <a
                href={`#${slug(p.num)}`}
                className="group flex items-baseline gap-2.5 py-2.5 text-foreground/65 transition hover:text-foreground"
              >
                <span className="num-display w-6 shrink-0 text-body-sm text-foreground/35 group-hover:text-brand">
                  {String(p.num).padStart(2, '0')}
                </span>
                <span className="leading-snug">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
