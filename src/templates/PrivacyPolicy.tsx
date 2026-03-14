import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const PrivacyPolicy = () => (
  <Background color="bg-gray-50">
    <Section yPadding="py-16">
      <div className="mx-auto max-w-3xl text-left text-gray-800">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: March 13, 2026
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          1. Introduction
        </h2>
        <p className="mt-3 leading-relaxed">
          This Privacy Policy describes how information is collected and used
          when you visit or interact with this website (the &quot;Site&quot;).
        </p>
        <p className="mt-3 leading-relaxed">
          The Site is operated by <strong>Dave Andrien</strong>, located in{' '}
          <strong>Pennsylvania, United States</strong>.
        </p>
        <p className="mt-3 leading-relaxed">
          If you have questions about this Privacy Policy or your personal
          information, you may contact:{' '}
          <a
            href="mailto:daandrien@gmail.com"
            className="text-primary-600 hover:text-primary-700"
          >
            daandrien@gmail.com
          </a>
          .
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          2. Information We Collect
        </h2>
        <p className="mt-3 leading-relaxed">
          The Site collects limited personal information when you voluntarily
          submit it through the contact form. This may include your name, email
          address, business information you choose to provide, and the content
          of your message.
        </p>
        <p className="mt-3 leading-relaxed">
          This information is used solely for responding to inquiries and
          discussing potential web development services.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          3. How Your Information Is Used
        </h2>
        <p className="mt-3 leading-relaxed">
          Information submitted through the contact form may be used to respond
          to inquiries, communicate about potential services, and provide
          information about web development services. Your information is{' '}
          <strong>not sold, rented, or shared for marketing purposes</strong>.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          4. Third-Party Services
        </h2>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">Formspree</h3>
        <p className="mt-2 leading-relaxed">
          The contact form on this Site is powered by <strong>Formspree</strong>
          , which processes and forwards form submissions to the operator&apos;s
          email inbox. Information submitted through the contact form may be
          processed by Formspree according to their privacy practices.
        </p>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">Hosting</h3>
        <p className="mt-2 leading-relaxed">
          This Site is hosted on <strong>Vercel</strong>, which may collect
          certain technical information such as IP addresses and request logs
          necessary for operating and securing the website.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          5. Data Retention
        </h2>
        <p className="mt-3 leading-relaxed">
          Contact form submissions are delivered to the operator&apos;s email
          inbox and are retained only as long as reasonably necessary to respond
          to inquiries or provide services. No additional database of user
          information is maintained by the Site.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          6. Data Security
        </h2>
        <p className="mt-3 leading-relaxed">
          Reasonable measures are taken to protect information transmitted
          through the Site. However, no method of internet transmission or
          electronic storage is completely secure.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          7. Your Rights
        </h2>
        <p className="mt-3 leading-relaxed">
          If you have submitted personal information through the contact form,
          you may request that your information be deleted. To make such a
          request, please contact
          {` `}
          <a
            href="mailto:daandrien@gmail.com"
            className="text-primary-600 hover:text-primary-700"
          >
            daandrien@gmail.com
          </a>
          .
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          8. External Links
        </h2>
        <p className="mt-3 leading-relaxed">
          This Site may contain links to external websites. This Privacy Policy
          applies only to this Site and does not apply to other websites or
          services.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mt-3 leading-relaxed">
          This Privacy Policy may be updated from time to time. When updates
          occur, the &quot;Last updated&quot; date at the top of this page will
          be revised.
        </p>
      </div>
    </Section>
  </Background>
);

export { PrivacyPolicy };
