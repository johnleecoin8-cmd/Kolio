/** Original flowing-ribbon hero art (built from scratch with SVG beziers).
 *  Warm red/coral/amber bands drifting across the dark hero panel. Shared kit. */
export default function FlowingArt() {
  const bands = [
    { d: 'M-100,250 C 250,90 520,420 820,210 S 1300,120 1640,300', c: 'url(#fg1)', w: 64, o: 0.9 },
    { d: 'M-100,340 C 300,180 600,470 900,300 S 1320,230 1640,380', c: 'url(#fg2)', w: 48, o: 0.8 },
    { d: 'M-100,170 C 280,40 560,300 880,150 S 1300,60 1640,220', c: 'url(#fg3)', w: 40, o: 0.7 },
    { d: 'M-100,420 C 240,300 540,560 880,400 S 1340,330 1640,470', c: 'url(#fg4)', w: 30, o: 0.6 },
    { d: 'M-100,110 C 320,20 620,210 940,90 S 1320,10 1640,150', c: 'url(#fg5)', w: 22, o: 0.5 },
  ];
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="fg1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#e23b28" /><stop offset="0.5" stopColor="#f8836b" /><stop offset="1" stopColor="#7a1d14" /></linearGradient>
        <linearGradient id="fg2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#f8836b" /><stop offset="0.6" stopColor="#ffb38f" /><stop offset="1" stopColor="#e23b28" /></linearGradient>
        <linearGradient id="fg3" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#b9332a" /><stop offset="0.5" stopColor="#e2603f" /><stop offset="1" stopColor="#ffcaa6" /></linearGradient>
        <linearGradient id="fg4" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffcaa6" /><stop offset="0.5" stopColor="#f8836b" /><stop offset="1" stopColor="#8c241a" /></linearGradient>
        <linearGradient id="fg5" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#f8836b" /><stop offset="1" stopColor="#e23b28" /></linearGradient>
        <filter id="fsoft"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>
      <g filter="url(#fsoft)">
        {bands.map((b, i) => <path key={i} d={b.d} stroke={b.c} strokeWidth={b.w} strokeLinecap="round" fill="none" opacity={b.o} />)}
      </g>
    </svg>
  );
}
