import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

// Feature rows that explain benefits of the site, alternating image/text layout.
const VerticalFeatures = () => (
  <Section
    title="A Website Built to Bring You Customers — Not Headaches"
    description="You shouldn’t have to worry about design, hosting, updates, or whether your site actually converts visitors into customers."
  >
    <VerticalFeatureRow
      title="Turn Visitors Into Customers"
      description="Your website isn’t just an online brochure — it’s your best salesperson."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Built to Support Your Growth"
      description="As your business grows, your website should keep up — not hold you back."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Launch With Confidence"
      description="From launch day to long after, your website will be something you’re proud to share."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
