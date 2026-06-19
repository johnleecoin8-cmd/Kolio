import Hero from '@/components/pages/api/Hero';
import Foundation from '@/components/pages/api/Foundation';
import ProductFeature from '@/components/pages/api/ProductFeature';
import Testimonials from '@/components/pages/api/Testimonials';
import UseCases from '@/components/pages/api/UseCases';
import DeveloperExperience from '@/components/pages/api/DeveloperExperience';
import CodeSample from '@/components/pages/api/CodeSample';
import GettingStarted from '@/components/pages/api/GettingStarted';
import Faq from '@/components/pages/api/Faq';
import FinalCta from '@/components/pages/api/FinalCta';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** modash.io Influencer Marketing API page — 1:1 clone. */
export default function Api() {
  return (
    <main>
      <Hero />
      <Foundation />
      <ProductFeature
        title="Discovery API"
        intro="The most comprehensive search engine for the creator economy."
        bullets={[
          'Query our 380M+ influencer database across TikTok, Instagram, and YouTube.',
          'Find creators using AI search, or simply via keywords, filters, or audience demographics.',
          'Explore brand and creator collaborations and timelines.',
          'Get profile reports including audience, engagement rate, average views, and more.',
        ]}
        image={`${CDN}/69132d7d673562560bf5985c_img_discovery%20api.avif`}
        imageAlt="Discovery API search and analytics"
        learnMore="/influencer-marketing-api/discovery"
      />
      <ProductFeature
        title="Raw API"
        intro="Access real-time content and performance data as it happens."
        bullets={[
          'Query live, unfiltered data directly from influencer profiles.',
          'Programmatically track campaign posts, monitor mentions, and much more in real-time.',
          'Analyze content, enrich your workflows, or pull live metrics for market and brand intelligence.',
        ]}
        image={`${CDN}/69df61a32e66b5f012b1a7a5_img_raw%20api_01.avif`}
        imageAlt="Raw API live profile data"
        learnMore="/influencer-marketing-api/raw"
        reverse
      />
      <Testimonials />
      <UseCases />
      <DeveloperExperience />
      <CodeSample />
      <GettingStarted />
      <Faq />
      <FinalCta />
    </main>
  );
}
