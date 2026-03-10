import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="hero-bg">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'Simple Websites for Local Businesses'}</>}
        description="Hi, I'm Dave — a freelance web developer helping local businesses get clean, modern websites while I build my portfolio."
        button={
          <Link href="/contact">
            <Button xl>Get Started</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
