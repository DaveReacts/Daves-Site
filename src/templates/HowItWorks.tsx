const steps = [
  {
    title: 'Step 1: Quick chat',
    description:
      'We talk about your business, your goals, and what you want your website to do for you.',
  },
  {
    title: 'Step 2: I design & build',
    description:
      'I create a clean, modern website focused on turning visitors into customers.',
  },
  {
    title: 'Step 3: Launch & support',
    description:
      'We launch your site, and I handle hosting and updates so you can stay focused on your business.',
  },
];

// Simple three-step explainer showing the high-level project flow.
const HowItWorks = () => (
  <section className="bg-black py-6 md:py-8">
    <div className="mx-auto max-w-screen-lg px-4">
      <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
        How it works
      </h2>

      <div className="mt-6 grid gap-8 text-white md:mt-8 md:grid-cols-3">
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
