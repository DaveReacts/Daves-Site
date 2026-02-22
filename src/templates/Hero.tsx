import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Need a website that just '}
            <span className="text-primary-500">works?</span>
          </>
        }
        description="Get a website you don’t have to think about"
        button={
          <Link href="/contact">
            <Button xl>Contact Us</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
