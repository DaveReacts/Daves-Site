import { Hero } from '@/templates/Hero';
import { VerticalFeatures } from '@/templates/VerticalFeatures';

import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Base>
      <Hero />
      <VerticalFeatures />
    </Base>
  </>
);

export default Index;
