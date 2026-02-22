import { Section } from '../layout/Section';

const AboutMe = () => (
  <Section yPadding="pt-16 pb-24">
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">Hi - I’m Dave</h1>

      <p className="mb-4 text-lg text-gray-700">
        I build fast, modern websites for small and medium-sized businesses that
        want a professional online presence without the stress. No confusing
        tools, no bloated features, and no ongoing headaches — just a website
        that works.
      </p>
      <p className="mb-4 text-lg text-gray-700">
        I focus on clarity, performance, and simplicity. That means clean
        design, easy navigation, and content that helps visitors understand your
        business and take action. Behind the scenes, every site is built with
        modern technology and can be connected to an easy-to-use editor, so
        you’re never locked in or dependent on a developer for small updates.
      </p>
      <p className="mb-4 text-lg text-gray-700">
        I work closely with each client, keep the process straightforward, and
        communicate clearly from start to finish. If something isn’t the right
        fit, I’ll say so — because the goal isn’t to sell you a website, it’s to
        build something that actually helps your business.
      </p>
    </div>
  </Section>
);

export { AboutMe };
