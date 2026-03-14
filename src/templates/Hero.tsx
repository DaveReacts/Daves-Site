import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="hero-bg">
    <Section yPadding="pt-20 pb-32">
      <div className="flex flex-col items-center gap-4">
        <header className="text-center">
          <h1 className="text-5xl font-bold leading-hero text-gray-900">
            Get a professional website for your small business
          </h1>
          <div className="mb-16 mt-4 text-2xl">
            I’m offering a limited number of free business websites while I grow
            my portfolio—built to make you look trustworthy online.
          </div>

          <Link href="/contact">
            <Button xl>Request Your Website</Button>
          </Link>
        </header>
        <a
          href="#offer-details"
          className="text-sm font-medium text-primary-500 hover:text-primary-700"
        >
          See what’s included
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  </Background>
);

export { Hero };
