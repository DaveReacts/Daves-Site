import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:items-center md:justify-center">
      <div className="mb-3 md:mb-0">{props.logo}</div>

      <nav>
        <ul className="navbar mt-1 flex flex-row justify-center text-xl font-medium text-gray-800 md:mt-0">
          {props.children}
        </ul>
      </nav>
    </div>

    <div className="mt-4 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }

        .navbar :global(a) {
          @apply transition-colors duration-150;
        }

        .navbar :global(a:hover) {
          @apply text-primary-500;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
