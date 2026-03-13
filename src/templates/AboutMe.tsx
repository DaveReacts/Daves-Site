import { useEffect, useRef, useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const AboutMe = () => {
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
      <Section yPadding="py-16">
        <div
          ref={containerRef}
          className={`mx-auto flex max-w-5xl flex-col items-center gap-10 transition-all duration-700 ease-out md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex w-full justify-center md:justify-start">
            <div className="size-56 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200 md:size-64">
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
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Hi, I&apos;m Dave <span aria-hidden="true">👋</span>
            </h1>

            <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                I build fast, modern websites for small and medium-sized
                businesses that want a professional online presence without the
                stress. No confusing tools, no bloated features, and no ongoing
                headaches — just a website that works.
              </p>
              <p>
                I focus on clarity, performance, and simplicity. That means
                clean design, easy navigation, and content that helps visitors
                understand your business and take action. Behind the scenes,
                every site is built with modern technology and can be connected
                to an easy-to-use editor, so you&apos;re never locked in or
                dependent on a developer for small updates.
              </p>
              <p>
                I work closely with each client, keep the process
                straightforward, and communicate clearly from start to finish.
                If something isn&apos;t the right fit, I&apos;ll say so —
                because the goal isn&apos;t to sell you a website, it&apos;s to
                build something that actually helps your business.
              </p>
              <p className="text-base text-gray-600">
                Under the hood, I use a modern tech stack (Next.js, React, and
                Tailwind CSS). In practice, that just means your site loads
                quickly, works well on phones, and can grow with your business
                without needing to be rebuilt from scratch.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { AboutMe };
