import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    <nav>
      <ul className="navbar mt-4 flex flex-row items-center justify-center text-xl font-medium text-gray-800">
        <li>{props.logo}</li>
        {props.children}
      </ul>
    </nav>

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
