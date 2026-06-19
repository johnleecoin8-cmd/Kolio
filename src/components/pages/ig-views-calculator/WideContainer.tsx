import { cn } from '@/lib/cn';

/**
 * Wide content wrapper used by the IG Average Views Calculator body sections.
 * The ground-truth page uses a ~1376px content area (≈32px side gutters on a
 * 1440 viewport) — noticeably wider than the standard 1136px <Container>.
 */
export default function WideContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1376px] px-4 md:px-8', className)}>
      {children}
    </div>
  );
}
