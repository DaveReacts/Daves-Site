import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Fade the call-to-action banner in only after it scrolls into view.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section yPadding="py-12">
      <div
        ref={containerRef}
        className={`mx-auto max-w-4xl transition-all duration-500 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <CTABanner
          label="2 Free Offers Remaining"
          title="Get a simple, modern website without the tech headaches."
          subtitle="I handle the design and build — you just cover your domain and hosting."
          button={
            <Link href="/contact">
              <Button>Request Your Website</Button>
            </Link>
          }
        />
      </div>
    </Section>
  );
};

export { Banner };
