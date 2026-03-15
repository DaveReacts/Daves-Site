import { AboutPreview } from '@/templates/AboutPreview';
import { Hero } from '@/templates/Hero';
import { HowItWorks } from '@/templates/HowItWorks';
import { WhatsIncluded } from '@/templates/WhatsIncluded';

import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

// Marketing homepage that assembles the hero, explainer, offer details, and about preview.
const Index = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Base>
      <Hero />
      <WhatsIncluded />
      <HowItWorks />
      <AboutPreview />
    </Base>
  </>
);

export default Index;
