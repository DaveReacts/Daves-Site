import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { ContactForm } from '../templates/ContactForm';
import { AppConfig } from '../utils/AppConfig';

export default function Contact() {
  return (
    <>
      <Meta title={`${AppConfig.title} | Contact`} description="Contact Us" />
      <Base>
        <ContactForm />
      </Base>
    </>
  );
}
