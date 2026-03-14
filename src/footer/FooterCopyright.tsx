import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footeropyright">
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
    <p className="mt-1 text-xs text-gray-500">
      <Link
        href="/privacy"
        className="font-medium text-gray-600 hover:text-primary-600"
      >
        Privacy Policy
      </Link>
      <span className="mx-2">·</span>
      <Link
        href="/terms"
        className="font-medium text-gray-600 hover:text-primary-600"
      >
        Terms of Use
      </Link>
    </p>
  </div>
);

export { FooterCopyright };
