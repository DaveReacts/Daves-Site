import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Toggle a subtle shadow once the user has scrolled past the top of the page.
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <Section yPadding="py-4">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </header>
  );
};

export { Header };
