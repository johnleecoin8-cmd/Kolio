import Hero from '@/components/pages/home/Hero';
import FloatingCards from '@/components/pages/home/FloatingCards';
import Showcase from '@/components/pages/home/Showcase';
import Proof from '@/components/pages/home/Proof';
import GetStarted from '@/components/pages/home/GetStarted';

export default function Home() {
  return (
    <>
      <Hero />
      <FloatingCards />
      <Showcase />
      <Proof />
      <GetStarted />
    </>
  );
}
