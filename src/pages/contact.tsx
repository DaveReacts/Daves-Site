import { Meta } from '../layout/Meta';
import { ContactForm } from '../templates/ContactForm';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { AppConfig } from '../utils/AppConfig';

export default function Contact() {
  return (
    <>
      <Meta title={`${AppConfig.title} | Contact`} description="Contact Us" />
      <div className="text-gray-600 antialiased">
        <Header />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
