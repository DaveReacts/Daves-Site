const steps = [
  {
    title: 'Step 1: Discovery & planning',
    description:
      'We talk through your business, goals, and audience, and you share any existing content or brand materials so we can define a clear plan.',
  },
  {
    title: 'Step 2: Proposal & agreement',
    description:
      'I send a detailed proposal with scope, timeline, and pricing. Once you approve and sign a simple agreement, we lock in your project start date.',
  },
  {
    title: 'Step 3: Design, build & feedback',
    description:
      'I design and build your site in stages, sharing checkpoints so you can review, give feedback, and request revisions before anything goes live.',
  },
  {
    title: 'Step 4: Launch & ongoing support',
    description:
      'We launch your site, connect your domain, and I handle technical setup, basic training, and ongoing support so you can focus on running your business.',
  },
];

const HowItWorks = () => (
  <section className="bg-black py-6 md:py-8">
    <div className="mx-auto max-w-screen-lg px-4">
      <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
        How it works
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-8 text-white sm:grid-cols-2 md:mt-8 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="text-center">
            <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-white text-base font-semibold text-black md:size-12 md:text-lg">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold md:text-xl">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-200 md:mt-3 md:text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { HowItWorks };
