import { AboutMe } from '@/templates/AboutMe';

import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

export default function About() {
  return (
    <>
      <Meta title={`${AppConfig.title} | About`} description="About" />
      <Base>
        <AboutMe />
      </Base>
    </>
  );
}
