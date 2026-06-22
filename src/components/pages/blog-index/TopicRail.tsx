/** Calm topic filter rail — non-interactive showcase of the editorial taxonomy. */
const topics = ['All', 'Methodology', 'On-chain', 'Attribution', 'Vetting', 'Playbook'];

export default function TopicRail() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {topics.map((t, i) => (
        <span
          key={t}
          className={
            i === 0
              ? 'rounded-pill bg-brand px-4 py-2 text-body-sm font-semibold text-white shadow-float-sm'
              : 'rounded-pill border border-hairline bg-white px-4 py-2 text-body-sm font-medium text-foreground/60 transition hover:text-foreground'
          }
        >
          {t}
        </span>
      ))}
    </div>
  );
}
