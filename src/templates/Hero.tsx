import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="hero-bg">
    <Section yPadding="pt-20 pb-32">
      <div className="flex flex-col items-center gap-4">
        <HeroOneButton
          title={<>{'Simple Websites for Local Businesses'}</>}
          description="Hi, I'm Dave — a freelance web developer helping local businesses get clean, modern websites while I build my portfolio."
          button={
            <Link href="/contact">
              <Button xl>Request Your Website</Button>
            </Link>
          }
        />
        <a
          href="#offer-details"
          className="text-sm font-medium text-primary-500 underline-offset-2 hover:text-primary-600 hover:underline"
        >
          Full Offer Details
        </a>
      </div>
    </Section>
  </Background>
);

export { Hero };
