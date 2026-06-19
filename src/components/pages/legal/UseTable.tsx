import RichText from './RichText';
import { USE_TABLE } from './data';

/**
 * "How We Use Personal Data" legal-ground table.
 * modash renders this as a borderless 3-column grid (Purpose / Description / Legal
 * ground) with a bold header row — no cell borders, no background fills.
 * Mobile: each row stacks; header row hidden.
 */
export default function UseTable() {
  return (
    <div className="my-8">
      {/* Header row — desktop only */}
      <div className="hidden md:grid grid-cols-[1fr_1.3fr_1.2fr] gap-x-10 pb-6">
        <div className="text-body-md font-bold text-foreground">Purpose</div>
        <div className="text-body-md font-bold text-foreground">Description</div>
        <div className="text-body-md font-bold text-foreground">Legal ground</div>
      </div>

      <div className="space-y-8 md:space-y-10">
        {USE_TABLE.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1.3fr_1.2fr] md:gap-x-10 md:gap-2"
          >
            <div className="text-body font-bold text-foreground">{row.purpose}</div>
            <div className="text-body text-foreground/75 leading-relaxed space-y-3">
              <RichText text={row.description} />
            </div>
            <div className="text-body text-foreground/75 leading-relaxed space-y-3">
              <RichText text={row.legal} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
