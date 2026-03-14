import { PrivacyPolicy } from '@/templates/PrivacyPolicy';

import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

export default function Privacy() {
  return (
    <>
      <Meta
        title={`${AppConfig.title} | Privacy Policy`}
        description="Privacy Policy for the Built By Dave website."
      />
      <Base>
        <PrivacyPolicy />
      </Base>
    </>
  );
}
