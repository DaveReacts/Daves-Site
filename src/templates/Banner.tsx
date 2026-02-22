import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready for a headache-free website?"
      button={
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
