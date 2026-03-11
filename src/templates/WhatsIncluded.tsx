import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const items = [
  'Clean, modern website design',
  'Mobile-friendly layout',
  'Fast loading pages',
  'Contact form',
  'Basic SEO setup',
  'Hosting and updates handled',
];

const WhatsIncluded = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
    <Background color="bg-gray-50">
      <Section
        title="What’s included"
        description="Everything you need for a simple, effective online presence—without the technical hassle."
      >
        <div
          ref={containerRef}
          className={`mx-auto max-w-3xl rounded-2xl border-t-4 border-primary-500 bg-white p-8 shadow-md ring-1 ring-gray-200 transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-6">
            <p className="bg-primary-50 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
              Website package includes
            </p>
            <p className="mt-2 pl-3 text-sm text-gray-500 sm:text-base">
              A simple, done-for-you setup so your business looks professional
              online.
            </p>
          </div>

          <ul className="grid gap-3 text-left text-lg leading-relaxed text-gray-700 md:grid-cols-2">
            {items.map((item, index) => (
              <li
                key={item}
                className={`flex items-start transition-all duration-700 ease-out ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="mr-3 mt-1 inline-flex size-6 items-center justify-center">
                  <svg
                    className="size-6 -rotate-3 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 13.5L9.5 19L20 6.5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 12L9 17.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                    />
                  </svg>
                </span>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center border-t border-gray-100 pt-6">
            <Link href="/contact">
              <Button>Request Your Website</Button>
            </Link>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { WhatsIncluded };
