import { useEffect, useRef, useState } from 'react';

import { Section } from '../layout/Section';

const items = [
  'Clean, modern website design',
  'Mobile-friendly layout',
  'Fast loading pages',
  'Contact form so customers can reach you',
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
    <Section
      title="What’s included"
      description="Everything you need for a simple, effective online presence—without the technical hassle."
    >
      <div
        ref={containerRef}
        className={`mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200 transition-all duration-700 ease-out${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <ul className="space-y-3 text-left text-lg leading-relaxed text-gray-700">
          {items.map((item, index) => (
            <li
              key={item}
              className={`flex items-start transition-all duration-700 ease-out${
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
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export { WhatsIncluded };
