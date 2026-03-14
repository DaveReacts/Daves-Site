import { TermsOfUse } from '@/templates/TermsOfUse';

import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

export default function Terms() {
  return (
    <>
      <Meta
        title={`${AppConfig.title} | Terms of Use`}
        description="Terms of Use for the Built By Dave website."
      />
      <Base>
        <TermsOfUse />
      </Base>
    </>
  );
}
