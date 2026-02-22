import type { ReactNode } from 'react';

import { Banner } from './Banner';
import { Footer } from './Footer';
import { Header } from './Header';

type BaseProps = {
  children: ReactNode;
};

const Base = ({ children }: BaseProps) => (
  <div className="text-gray-600 antialiased">
    <Header />
    {children}
    <Banner />
    <Footer />
  </div>
);

export { Base };
