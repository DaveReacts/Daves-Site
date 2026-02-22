import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

export default function Contact() {
  return (
    <>
      <Meta title={`${AppConfig.title} | Contact`} description="Contact Us" />
      <Base>
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Contact Us</h1>
      </Base>
    </>
  );
}
