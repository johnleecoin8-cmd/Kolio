import RichText from './RichText';
import { USE_TABLE } from './data';

/**
 * "How We Use Personal Data" legal-ground table.
 * Desktop: 3-col grid (Purpose / Description / Legal ground) with a bold header row.
 * Mobile: each row stacks; header row hidden.
 */
export default function UseTable() {
  return (
    <div className="my-6 overflow-hidden rounded border border-black/10">
      {/* Header row — desktop only */}
      <div className="hidden md:grid grid-cols-[1fr_1.6fr_1.4fr] bg-background-soft border-b border-black/10">
        <div className="p-4 text-body font-bold text-foreground">Purpose</div>
        <div className="p-4 text-body font-bold text-foreground border-l border-black/10">
          Description
        </div>
        <div className="p-4 text-body font-bold text-foreground border-l border-black/10">
          Legal ground
        </div>
      </div>

      {USE_TABLE.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr_1.4fr] border-b border-black/10 last:border-b-0"
        >
          <div className="p-4 text-body-sm font-bold text-foreground">{row.purpose}</div>
          <div className="p-4 text-body-sm text-foreground/75 md:border-l border-black/10 space-y-3">
            <RichText text={row.description} />
          </div>
          <div className="p-4 text-body-sm text-foreground/75 md:border-l border-black/10 space-y-3">
            <RichText text={row.legal} />
          </div>
        </div>
      ))}
    </div>
  );
}
