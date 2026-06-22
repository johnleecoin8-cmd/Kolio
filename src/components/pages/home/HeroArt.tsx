import { motion } from 'framer-motion';

/** Original hero art: soft warm gradient orbs drifting on the dark panel, with a
 *  fine grid and grain for richness. Built from scratch, distinct to Kolio. */
export default function HeroArt() {
  const orbs = [
    { c: '#e23b28', x: '12%', y: '24%', s: 460, o: 0.55, dx: 30, dy: -20, t: 13 },
    { c: '#f8836b', x: '70%', y: '18%', s: 520, o: 0.5, dx: -26, dy: 24, t: 16 },
    { c: '#ff9e57', x: '50%', y: '78%', s: 560, o: 0.4, dx: 22, dy: -18, t: 18 },
    { c: '#b9332a', x: '88%', y: '66%', s: 400, o: 0.45, dx: -20, dy: -24, t: 15 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* drifting orbs */}
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-pill"
          style={{
            left: o.x, top: o.y, width: o.s, height: o.s,
            background: `radial-gradient(circle at 50% 50%, ${o.c}, transparent 68%)`,
            opacity: o.o, filter: 'blur(36px)', translateX: '-50%', translateY: '-50%',
          }}
          animate={{ x: [0, o.dx, 0], y: [0, o.dy, 0] }}
          transition={{ duration: o.t, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, #000 40%, transparent 100%)',
        }}
      />
      {/* darken edges for text contrast */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 40%, transparent 30%, hsl(240 18% 7% / 0.7) 100%)' }} />
    </div>
  );
}
