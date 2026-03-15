import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="hero-bg">
    <Section yPadding="pt-20 pb-32">
      <div className="flex flex-col items-center gap-4">
        <header className="space-y-6 text-center md:space-y-8">
          <h1 className="text-4xl font-extrabold leading-tight text-[#1F2937] md:text-5xl">
            A Clean, Professional Website for Your Small Business
          </h1>
          <div className="text-2xl md:text-3xl">
            I’m offering a limited number of free websites while I grow my
            portfolio — built to help your business look trustworthy online.
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link href="/contact">
              <Button xl>Request Your Website</Button>
            </Link>
            <p className="max-w-md text-sm text-gray-600">
              No upfront cost. You only pay for domain and hosting
              (~$10–20/month).
            </p>
          </div>
        </header>
      </div>
    </Section>
  </Background>
);

export { Hero };
