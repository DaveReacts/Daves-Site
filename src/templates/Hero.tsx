import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="hero-bg">
    <Section yPadding="pt-20 pb-32">
      <div className="flex flex-col items-center gap-4">
        <header className="space-y-6 text-center md:space-y-8">
          <h1 className="text-5xl font-extrabold leading-hero text-[#1F2937]">
            A Clean, Professional Website for Your Business
          </h1>
          <div className="text-2xl md:text-3xl">
            I’m offering a limited number of free websites for small businesses
            while I grow my portfolio—built to make you look trustworthy online.
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link href="/contact">
              <Button xl>Request Your Website</Button>
            </Link>
            <p className="max-w-md text-sm text-gray-600">
              No upfront cost. Just looking to work with 2-3 businesses while I
              build my portfolio.
            </p>
          </div>
        </header>
      </div>
    </Section>
  </Background>
);

export { Hero };
