import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

export default function WhatListeners() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans font-bold text-h4 md:text-h3 leading-tight tracking-tight text-navy">
              What listeners can expect
            </h2>
            <p className="mt-6 text-body-sm text-foreground/70 max-w-[420px]">
              If you work in influencer marketing in any capacity at a B2C brand,
              listening to this podcast will help you do your job better.
            </p>
            <p className="mt-4 text-body-sm text-foreground/70 max-w-[420px]">
              You'll hear directly from world-class marketers who are in the
              trenches every day, building and scaling influencer marketing as a
              revenue-generating channel.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={`${CDN}/650adfda817c9f1e05ddd329_img_creator%20partnerships%20podcast%20topics.avif`}
              alt="Podcast topics"
              className="w-full max-w-[440px]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
