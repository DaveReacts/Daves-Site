import { Meta } from '../layout/Meta';
import { ContactForm } from '../templates/ContactForm';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { AppConfig } from '../utils/AppConfig';

// Contact page that directly composes the header, contact form, and footer without the extra banner.
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
