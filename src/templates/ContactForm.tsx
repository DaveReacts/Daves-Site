import type { FormEvent } from 'react';
import { useState } from 'react';

import { Section } from '../layout/Section';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjbrklb';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setHasSubmitted(false);

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
        console.error('Formspree error', await response.text());
      }
    } catch (error) {
      console.error('Network error', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section yPadding="pt-16 pb-24">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Contact Me</h1>
        <p className="mb-8 text-gray-700">
          Tell me a bit about what you need and how I can help.
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {hasSubmitted && (
            <p className="text-sm text-green-700">
              Thanks for reaching out — I&apos;ll get back to you as soon as I
              can.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};

export { ContactForm };
