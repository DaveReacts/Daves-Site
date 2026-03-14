import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

// Global footer with centered logo and simple navigation back to core pages.
const Footer = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-8">
      <CenteredFooter logo={<Logo />}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
