import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    <p className="text-xs text-gray-500">
      Questions? Email me at{' '}
      <a
        href="mailto:dave@example.com"
        className="font-medium text-primary-600 underline-offset-2 hover:text-primary-700 hover:underline"
      >
        dave@example.com
      </a>
      .
    </p>
    <p className="mt-1 text-xs text-gray-500">
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </p>
  </div>
);

export { FooterCopyright };
