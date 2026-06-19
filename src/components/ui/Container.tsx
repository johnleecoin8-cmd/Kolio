import { ReactNode } from 'react';

/** Centered content wrapper. modash content max-width = 1136px, 0.75rem side gutter. */
export default function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-container px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
