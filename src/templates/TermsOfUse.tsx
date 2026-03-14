import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const TermsOfUse = () => (
  <Background color="bg-gray-50">
    <Section yPadding="py-16">
      <div className="mx-auto max-w-3xl text-left text-gray-800">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: March 13, 2026
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          1. Acceptance of Terms
        </h2>
        <p className="mt-3 leading-relaxed">
          By accessing or using this website (the &quot;Site&quot;), you agree
          to be bound by these Terms of Use. If you do not agree to these Terms,
          please do not use the Site.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          2. Website Operator
        </h2>
        <p className="mt-3 leading-relaxed">
          This Site is operated by <strong>Dave Andrien</strong>, located in{' '}
          <strong>Pennsylvania, United States</strong>. Contact:{' '}
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
          3. Purpose of the Website
        </h2>
        <p className="mt-3 leading-relaxed">
          This Site is intended to provide information about freelance web
          development services and to showcase portfolio work. Information on
          this Site is provided for{' '}
          <strong>general informational and promotional purposes only</strong>{' '}
          and does not constitute a binding offer or contract for services. Any
          web development services are subject to separate agreements between
          the developer and the client.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          4. Intellectual Property
        </h2>
        <p className="mt-3 leading-relaxed">
          All content on this Site, including but not limited to text, design,
          layout, graphics, branding, and code samples, is the property of the
          Site operator unless otherwise stated and is protected by applicable
          intellectual property laws. Content from this Site may not be copied,
          reproduced, or reused without permission.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          5. Acceptable Use
        </h2>
        <p className="mt-3 leading-relaxed">
          You agree not to use this Site for unlawful purposes, to attempt to
          gain unauthorized access to the Site or its systems, or to interfere
          with the operation or security of the Site.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          6. No Warranties
        </h2>
        <p className="mt-3 leading-relaxed">
          The information provided on this Site is provided{' '}
          <strong>&quot;as is&quot;</strong> and without warranties of any kind.
          While reasonable efforts are made to ensure the accuracy of
          information, the Site operator makes no guarantees regarding the
          completeness, accuracy, reliability, or suitability of information on
          the Site.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          7. Limitation of Liability
        </h2>
        <p className="mt-3 leading-relaxed">
          To the fullest extent permitted by law, the Site operator shall not be
          liable for any damages arising from the use of this Site, reliance on
          information provided on this Site, or temporary unavailability of the
          Site.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          8. External Links
        </h2>
        <p className="mt-3 leading-relaxed">
          The Site may contain links to third-party websites. The operator is
          not responsible for the content or practices of those external sites.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          9. Governing Law
        </h2>
        <p className="mt-3 leading-relaxed">
          These Terms of Use are governed by the laws of the{' '}
          <strong>Commonwealth of Pennsylvania, United States</strong>, without
          regard to conflict of law principles.
        </p>

        <hr className="mt-8 border-gray-200" />

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          10. Changes to These Terms
        </h2>
        <p className="mt-3 leading-relaxed">
          These Terms of Use may be updated from time to time. Continued use of
          the Site after changes are posted constitutes acceptance of those
          changes.
        </p>
      </div>
    </Section>
  </Background>
);

export { TermsOfUse };
