import Link from 'next/link';
import type { FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Section } from '../layout/Section';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjbrklb';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [visible, setVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setHasSubmitted(false);
    setHasError(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        setHasSubmitted(true);
        form.reset();
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section yPadding="pt-16 pb-24">
      <div
        ref={containerRef}
        className={`mx-auto max-w-xl transition-all duration-700 ease-out${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Contact Me</h1>
        <p className="mb-2 text-gray-700">
          Tell me a bit about what you need and how I can help. I usually reply
          within one business day.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Business / Company (optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Give me a short overview of your business, what you need, and any timelines you have in mind."
            />
          </div>

          <div className="space-y-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            <p className="text-xs text-gray-500">
              By submitting this form, you agree to the{' '}
              <Link
                href="/terms"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary-600 hover:text-primary-700"
              >
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary-600 hover:text-primary-700"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {hasSubmitted && (
            <p className="text-sm text-green-700">
              Thanks for reaching out — I&apos;ll get back to you as soon as I
              can.
            </p>
          )}

          {hasError && (
            <p className="text-sm text-red-600">
              Sorry, there was a problem sending your message. Please try again
              in a moment, or email me directly.
            </p>
          )}
        </form>
        <p className="mt-8 text-sm text-gray-600">
          Prefer email? You can reach me directly at{' '}
          <a
            href="mailto:dave@example.com"
            className="font-medium text-primary-600 underline-offset-2 hover:text-primary-700 hover:underline"
          >
            dave@example.com
          </a>
          .
        </p>
      </div>
    </Section>
  );
};

export { ContactForm };
