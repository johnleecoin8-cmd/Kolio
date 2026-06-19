import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const STATS = [
  { value: '100%', label: 'of KOL posts captured, deleted ones included' },
  { value: '4', label: 'platforms tracked: X, YouTube, TikTok, Telegram' },
  { value: '0', label: 'screenshots you ever have to chase again' },
];

/** "See it in action" — warm gradient stat panel (later.com-inspired). */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-[28px] bg-gradient-brand px-6 py-14 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-[760px] font-display text-[2rem] uppercase leading-[1.02] text-white sm:text-[2.75rem] md:text-[3.25rem]">
            See exactly what your KOLs delivered
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-body-md text-white/85">
            Kolio captures every post and wires on-chain results back to each KOL, so
            the proof lives in one place, not in your screenshots folder.
          </p>

          <div className="mx-auto mt-12 grid max-w-[900px] gap-8 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-[3rem] leading-none text-white md:text-[3.75rem]">
                  {s.value}
                </p>
                <p className="mx-auto mt-3 max-w-[220px] text-body-sm text-white/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <ButtonA href="/demo-confirmation" variant="secondary">
              See it in action
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
