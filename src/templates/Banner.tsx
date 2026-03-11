import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section yPadding="py-12">
    <CTABanner
      label="2 Free Offers Remaining"
      title="Get a simple, modern website without the tech headaches."
      button={
        <Link href="/contact">
          <Button>Request Your Website</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
