import { Hero } from '@/templates/Hero';
import { HowItWorks } from '@/templates/HowItWorks';

import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Base>
      <Hero />
      <HowItWorks />
    </Base>
  </>
);

export default Index;
