import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import HeroArt from './HeroArt';

export default function Hero() {
  return (
    <section className="canvas px-3 pb-8 pt-4 md:px-5">
      <div className="panel bigpanel grain relative mx-auto min-h-[600px] max-w-[1360px] overflow-hidden md:min-h-[680px]">
        <HeroArt />
        <Container>
          <div className="relative flex min-h-[600px] flex-col items-center justify-center py-24 text-center md:min-h-[680px]">
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-1.5 text-body-sm font-medium text-on-dark/80 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-pill bg-brand-2" /> The proof layer for crypto KOL marketing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="display mx-auto max-w-[16ch] text-[2.9rem] text-on-dark sm:text-6xl md:text-[5.25rem]"
            >
              Run crypto KOL campaigns you can <span className="text-grad">prove</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-7 max-w-xl text-body-lg text-on-dark/65"
            >
              Discover vetted KOLs, verify real on-chain reach, and pay in escrow. One rail from first contact to settled payout.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Button to="/influencer-database" variant="light" className="float-sm">Find crypto KOLs <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/demo-confirmation" variant="dark">Book a demo</Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
