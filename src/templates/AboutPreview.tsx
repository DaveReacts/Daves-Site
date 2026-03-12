import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const AboutPreview = () => {
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
    <Background color="bg-gray-200">
      <Section yPadding="py-16">
        <div
          ref={containerRef}
          className={`mx-auto flex max-w-4xl flex-col items-center gap-8 transition-all duration-700 ease-out md:grid md:grid-cols-2 md:items-start${
            visible ? ' translate-y-0 opacity-100' : ' translate-y-6 opacity-0'
          }`}
        >
          <div className="flex w-full justify-center md:justify-start">
            <div className="size-48 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200 md:size-56">
              <img
                src="/Dave.jpg"
                alt="Dave"
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="w-full text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              About me
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Hi, I&apos;m Dave <span aria-hidden="true">👋</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              I&apos;m a freelance web developer helping local businesses get
              clean, modern websites.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-gray-700">
              I&apos;m currently building my portfolio, so I&apos;m offering a
              few businesses a free website while I gain experience.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-gray-700">
              If you&apos;re a local business owner who needs a simple website
              that works, I&apos;d love to help.
            </p>

            <div className="mt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-base font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                Read full About Me
                <span aria-hidden="true" className="ml-1 text-lg"></span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { AboutPreview };
